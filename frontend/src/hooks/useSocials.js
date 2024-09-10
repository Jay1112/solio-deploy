import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SocialsAPI } from "../store/apis";
import { toast } from "react-hot-toast";
import { AppConfig } from "../config/conf";
import {
  setUserPlatformsList,
  setPlatformsList,
  setShowSocialModal,
  setEditSocialModal,
  setDeleteSocialModal,
} from "../store/features/socialSlice";

function useSocials() {
  const dispatch = useDispatch();
  const [userPlatformLoader, setUserPlatformLoader] = useState(false);
  const [createPlatformLoader, setCreatePlatformLoader] = useState(false);
  const [editSocialLoader, setEditSocialLoader] = useState(false);
  const [deleteSocialLoader, setDeleteSocialLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllSocials = async () => {
    const url = `${AppConfig.DOMAIN}${SocialsAPI.platforms}`;
    // setLoading(true);
    try {
      const resp = await axios.get(url, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setPlatformsList(resp?.data?.data?.platforms));
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchAllUserSocials = async () => {
    const url = `${AppConfig.DOMAIN}${SocialsAPI.userSocials}`;
    setUserPlatformLoader(true);
    try {
      const resp = await axios.get(url, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setUserPlatformsList(resp?.data?.data?.userPlatforms));
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setUserPlatformLoader(false);
    }
  };

  const createNewUserSocial = async (link, platformId) => {
    const url = `${AppConfig.DOMAIN}${SocialsAPI.createSocial}`;
    setCreatePlatformLoader(true);
    try {
      const resp = await axios.post(
        url,
        {
          link,
          platformId,
        },
        { withCredentials: true }
      );
      if (resp?.data?.success) {
        dispatch(setShowSocialModal(false));
        await fetchAllUserSocials();
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setCreatePlatformLoader(false);
    }
  };

  const editUserSocial = async (socialId, platformId, link) => {
    const url = `${AppConfig.DOMAIN}${SocialsAPI.updateSocial}${socialId}`;
    setEditSocialLoader(true);
    try {
      const resp = await axios.post(
        url,
        {
          link,
          platformId,
        },
        { withCredentials: true }
      );
      if (resp?.data?.success) {
        dispatch(setEditSocialModal(false));
        await fetchAllUserSocials();
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setEditSocialLoader(false);
    }
  };

  const deleteUserSocial = async (socialId) => {
    const url = `${AppConfig.DOMAIN}${SocialsAPI.deleteSocial}${socialId}`;
    setDeleteSocialLoader(true);
    try {
      const resp = await axios.post(url, {}, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setDeleteSocialModal(false));
        await fetchAllUserSocials();
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setDeleteSocialLoader(false);
    }
  };

  return {
    fetchAllSocials,
    fetchAllUserSocials,
    createNewUserSocial,
    editUserSocial,
    deleteUserSocial,
    userPlatformLoader,
    createPlatformLoader,
    editSocialLoader,
    deleteSocialLoader,
    error,
  };
}

export default useSocials;

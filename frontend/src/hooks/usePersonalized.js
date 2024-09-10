import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PersonalizedAPI } from "../store/apis";
import { toast } from "react-hot-toast";
import { AppConfig } from "../config/conf";
import {
  setPersonalizedItemsList,
  setPersonalizedTypesList,
} from "../store/features/personalizedSlice";

function usePersonalized() {
  const dispatch = useDispatch();
  const [allPersonalizationsLoader, setAllPersonalizationsLoader] =
    useState(false);
  const [typesLoader, setTypesLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserPersonalizationList = async () => {
    const url = `${AppConfig.DOMAIN}${PersonalizedAPI.personalizations}`;
    setAllPersonalizationsLoader(true);
    try {
      const resp = await axios.get(url, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setPersonalizedItemsList(resp?.data?.data));
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setAllPersonalizationsLoader(false);
    }
  };

  const fetchPersonalizationTypesList = async () => {
    const url = `${AppConfig.DOMAIN}${PersonalizedAPI.personalizationTypes}`;
    setTypesLoader(true);
    try {
      const resp = await axios.get(url, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setPersonalizedTypesList(resp?.data?.data));
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setTypesLoader(false);
    }
  };

  return {
    fetchUserPersonalizationList,
    fetchPersonalizationTypesList,
    allPersonalizationsLoader,
    typesLoader,
  };
}

export default usePersonalized;

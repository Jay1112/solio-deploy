import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UserAPI } from "../store/apis";
import { toast } from "react-hot-toast";
import { AppConfig } from "../config/conf";
import { setUserData } from "../store/features/authSlice";

function useDashboardInfo() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePersonalInfo = async (fullname, location, description) => {
    const url = `${AppConfig.DOMAIN}${UserAPI.personalInfo}`;
    setLoading(true);
    try {
      const resp = await axios.post(
        url,
        {
          fullname,
          location,
          description,
        },
        { withCredentials: true }
      );
      if (resp?.data?.success) {
        toast.success("Personal Info Successfully Updated.");
        dispatch(setUserData(resp?.data?.data));
      } else {
        toast.error(resp?.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updatePersonalInfo, loading, error };
}

export default useDashboardInfo;

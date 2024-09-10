import { useDispatch } from "react-redux";
import { setUserLoggedOut } from "../store/features/authSlice";
import axios from "axios";
import { AuthAPI } from "../store/apis";
import { AppConfig } from "../config/conf";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doLogout = async () => {
    const url = `${AppConfig.DOMAIN}${AuthAPI.signOut}`;
    setLoading(true);
    try {
      const resp = await axios.post(url, {}, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setUserLoggedOut());
        navigate("/sign-in/");
        toast.success("Sign out SuccessFully");
      } else {
        toast.error("Sign-out Failed");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong while destroying the session");
      setError(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { doLogout, loading, error };
}

export default useSignOut;

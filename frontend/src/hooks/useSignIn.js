import { useDispatch } from "react-redux";
import { setUserLoggedIn, setUserData } from "../store/features/authSlice";
import axios from "axios";
import { AuthAPI } from "../store/apis";
import { AppConfig } from "../config/conf";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doSignIn = async (email, password) => {
    const url = `${AppConfig.DOMAIN}${AuthAPI.signIn}`;
    setLoading(true);
    try {
      const resp = await axios.post(
        url,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (resp?.data?.success && resp?.data?.data?.verified) {
        dispatch(setUserLoggedIn(resp?.data?.data));
        navigate("/dashboard/");
        toast.success("Sign In SuccessFully");
      } else if (resp?.data?.success && !resp?.data?.success?.verified) {
        dispatch(setUserData(resp?.data?.data));
        toast("Please Veify Your Account!", {
          icon: "ℹ️",
        });
        navigate("/verify-otp/");
      } else {
        toast.error("Sign In Failed");
        setError("Something went wrong while validating credentials");
      }
    } catch (err) {
      setError(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { doSignIn, loading, error };
}

export default useSignIn;

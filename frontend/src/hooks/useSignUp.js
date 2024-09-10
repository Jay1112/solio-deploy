import { useDispatch } from "react-redux";
import { setUserData } from "../store/features/authSlice";
import axios from "axios";
import { AuthAPI } from "../store/apis";
import { AppConfig } from "../config/conf";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doSignUp = async (email, password, username) => {
    const url = `${AppConfig.DOMAIN}${AuthAPI.signUp}`;
    setLoading(true);
    try {
      const resp = await axios.post(url, {
        email,
        password,
        username,
      });
      if (resp?.data?.success) {
        dispatch(setUserData(resp?.data?.data));
        toast("Please Verify OTP to open the Dashboard", {
          icon: "ℹ️",
        });
        navigate("/verify-otp/");
      } else {
        toast.error("Sign up Failed");
        setError("Invalid");
      }
    } catch (err) {
      setError(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { doSignUp, loading, error };
}

export default useSignUp;

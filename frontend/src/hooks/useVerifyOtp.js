import { useDispatch } from "react-redux";
import { setUserData } from "../store/features/authSlice";
import axios from "axios";
import { AuthAPI } from "../store/apis";
import { AppConfig } from "../config/conf";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useVerifyOTP() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyOtp = async (otp, email) => {
    const url = `${AppConfig.DOMAIN}${AuthAPI.verifyOtp}`;
    setLoading(true);
    try {
      const resp = await axios.post(url, {
        otp,
        email,
      });
      if (resp?.data?.success) {
        dispatch(setUserData(null));
        toast.success("OTP Verified");
        toast("You are verified user. please do login", {
          icon: "ℹ️",
        });
        navigate("/sign-in/");
      } else {
        toast.error("OTP verification failed");
        setError("Invalid");
      }
    } catch (err) {
      setError(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { verifyOtp, loading, error };
}

export default useVerifyOTP;

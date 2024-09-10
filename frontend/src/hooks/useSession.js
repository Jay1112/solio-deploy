import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../store/features/authSlice";
import axios from "axios";
import { AppConfig } from "../config/conf";
import { UserAPI } from "../store/apis";
import { toast } from "react-hot-toast";

function useSession() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initAppSession = async () => {
    const url = `${AppConfig.DOMAIN}${UserAPI.session}`;
    setLoading(true);
    try {
      const resp = await axios.get(url, { withCredentials: true });
      if (resp?.data?.success) {
        dispatch(setUserLoggedIn(resp?.data?.data));
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { initAppSession, loading, error };
}

export default useSession;

import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashBoardPage from "./pages/DashBoardPage";
import useSession from "./hooks/useSession";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";
import LoadingPage from "./pages/LoadingPage";
import SocialsPage from "./pages/SocialsPage";
import VerifyOtp from "./pages/VerifyOtpPage";
import PersonalizedPage from "./pages/PersonalizedPage";

function App() {
  const { initAppSession, loading } = useSession();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    initAppSession();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      {!loading && auth.isLoggedIn && (
        <Route path="/dashboard/" element={<DashBoardPage />} />
      )}
      {!loading && auth.isLoggedIn && (
        <Route path="/socials/" element={<SocialsPage />} />
      )}
      {!loading && auth.isLoggedIn && (
        <Route path="/personalized/" element={<PersonalizedPage />} />
      )}
      {!loading && !auth.isLoggedIn && auth.userData && (
        <Route path="/verify-otp/" element={<VerifyOtp />} />
      )}
      {!loading && !auth.isLoggedIn && (
        <Route path="/sign-in/" element={<SignInPage />} />
      )}
      {!loading && !auth.isLoggedIn && (
        <Route path="/sign-up/" element={<SignUpPage />} />
      )}
      {!loading && <Route path="*" element={<PageNotFound />} />}
      {loading && <Route path="*" element={<LoadingPage />} />}
    </Routes>
  );
}

export default App;

import React from "react";
import NavbarLayout from "../layouts/NavbarLayout";
import VerifyOtpForm from "../components/Verify-Otp/VerifyOtpForm";

function VerifyOtpPage() {
  return (
    <NavbarLayout>
      <div className="h-full flex items-center justify-center relative">
        <div className="flex-1 p-4 max-w-[600px] animated animatedFadeInUp fadeInUp absolute top-20 w-full">
          <VerifyOtpForm />
        </div>
      </div>
    </NavbarLayout>
  );
}

export default VerifyOtpPage;

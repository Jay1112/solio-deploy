import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import useSignIn from "../../hooks/useSignIn";
import useVerifyOTP from "../../hooks/useVerifyOtp";
import { useSelector } from "react-redux";

function VerifyOtpForm() {
  const { verifyOtp, loading } = useVerifyOTP();
  const auth = useSelector((state) => state.auth);

  function handleSubmit(e) {
    e.preventDefault();
    const otp = `${e.target[0].value}`;

    verifyOtp(otp, auth.userData.email);
  }

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col">
      <h1 className="font-poppins text-2xl w-full">Verify OTP </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          label="OTP"
          type="number"
          min={111111}
          max={999999}
          containerStyle="w-full mt-4"
          placeholder="Enter your OTP..."
          className="primary-input w-full p-3 my-2 rounded-sm"
          required={true}
        />
        <Button
          buttonStyle="w-full mt-4 primary-button px-2 py-2.5 text-lg rounded-sm"
          type="submit"
          disabled={loading}
        >
          <span className="font-poppins">
            {loading ? "Loading..." : "Verify"}
          </span>
        </Button>
      </form>
    </div>
  );
}

export default VerifyOtpForm;

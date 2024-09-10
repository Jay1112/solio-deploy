import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import NavLink from "../layout/NavLink";
import useSignUp from "../../hooks/useSignUp";

function SignUpForm() {
  const { doSignUp, loading } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    doSignUp(email, password, username);
  }

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col">
      <h1 className="font-poppins text-2xl w-full">Sign Up </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          label="Username"
          type="text"
          containerStyle="w-full mt-4"
          placeholder="Enter your username..."
          className="primary-input w-full p-3 my-2 rounded-sm"
          required={true}
        />
        <Input
          label="Email"
          type="email"
          containerStyle="w-full mt-4"
          placeholder="Enter your email..."
          className="primary-input w-full p-3 my-2 rounded-sm"
          required={true}
        />
        <Input
          label="Password"
          type="password"
          containerStyle="w-full mt-4"
          placeholder="Enter your password..."
          className="primary-input w-full p-3 my-2 rounded-sm"
          required={true}
        />
        <Button
          buttonStyle="w-full mt-4 primary-button px-2 py-2.5 text-lg rounded-sm"
          type="submit"
          disabled={loading}
        >
          <span className="font-poppins">
            {loading ? "Loading..." : "Sign-up"}
          </span>
        </Button>
      </form>
      <div className="w-full mt-4">
        <span className="inline-block text-secondary">
          Already have an account ? do{" "}
        </span>
        <NavLink navLinkStyle="inline-block mx-2" to="/sign-in/">
          <span className="inline-block text-subprimary hover:text-subprimary">
            sign-in
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SignUpForm;

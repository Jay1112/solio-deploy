import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import NavLink from "../layout/NavLink";
import useSignIn from "../../hooks/useSignIn";

function SignInForm() {
  const { doSignIn, loading } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    doSignIn(email, password);
  }

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col">
      <h1 className="font-poppins text-2xl w-full">Sign In </h1>
      <form onSubmit={handleSubmit} className="w-full">
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
            {loading ? "Loading..." : "Sign-in"}
          </span>
        </Button>
      </form>
      <div className="w-full mt-6">
        <NavLink navLinkStyle="block w-full" to="/forgot-password/">
          <span className="inline-block text-secondary hover:text-subprimary">
            Forgot Password?
          </span>
        </NavLink>
      </div>
      <div className="w-full mt-2">
        <span className="inline-block text-secondary">
          Don’t have an account ?{" "}
        </span>
        <NavLink navLinkStyle="inline-block mx-2" to="/sign-up/">
          <span className="inline-block text-subprimary hover:text-subprimary">
            create an account
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SignInForm;

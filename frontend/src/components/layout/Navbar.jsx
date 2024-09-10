import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  function handleSignIn() {
    const page = location.pathname !== "/sign-in/" ? "/sign-in/" : "/sign-up/";
    navigate(page);
  }

  return (
    <>
      <nav className="text-light p-4 flex nav-box-shadow">
        <div className="flex-1 flex items-center justify-start">
          <p className="text-[24px] font-poppins">
            <NavLink to="/">Solio</NavLink>
          </p>
          <p className="font-poppins ml-6 mr-3 hover:text-primary">
            <NavLink to="/about">About</NavLink>
          </p>
          <p className="font-poppins mr-3 ml-3 hover:text-primary">
            <NavLink to="/contact">Contact</NavLink>
          </p>
        </div>
        {(!auth.isLoggedIn || !auth.userData) && (
          <div className="flex items-center justify-center">
            <Button
              buttonStyle="primary-button px-2 py-[4px] text-lg rounded-sm"
              clickHandler={handleSignIn}
            >
              {location.pathname !== "/sign-in/" ? "Sign-In" : "Sign-up"}
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

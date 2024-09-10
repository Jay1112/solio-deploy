import React from "react";
import NavLink from "./NavLink";
import Button from "../ui/Button";
import useSignOut from "../../hooks/useSignOut";

function DashboardNavbar() {
  const { doLogout, loading } = useSignOut();

  function handleLogout() {
    doLogout();
  }

  return (
    <>
      <nav className="text-light p-4 flex nav-box-shadow bg-dark border-b-2 border-subsecondary">
        <div className="flex-1 flex items-center justify-start">
          <NavLink navLinkStyle="text-[24px] font-monster" to="/">
            Solio
          </NavLink>
        </div>
        <div className="flex items-center justify-center">
          <Button
            buttonStyle="primary-button px-2 py-[4px] text-md rounded-sm"
            clickHandler={handleLogout}
            disabled={loading}
          >
            <span className="font-poppins">
              {loading ? "Loading..." : "Sign-out"}
            </span>
          </Button>
        </div>
      </nav>
    </>
  );
}

export default DashboardNavbar;

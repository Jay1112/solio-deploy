import React from "react";
import { Link } from "react-router-dom";

function NavLink({ navLinkStyle = "", to = "/", children }) {
  return (
    <Link className={`${navLinkStyle}`} to={to}>
      {children}
    </Link>
  );
}

export default NavLink;

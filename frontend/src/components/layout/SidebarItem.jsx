import React, { useState } from "react";
import NavLink from "../layout/NavLink";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

function SidebarItem({ itemData }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className={clsx(
        "my-3 rounded-sm flex items-center justify-center",
        location.pathname === itemData.link
          ? "bg-primary text-light"
          : "text-light hover:bg-secondary hover:text-darker"
      )}
    >
      <NavLink
        to={itemData.link}
        navLinkStyle="w-full inline-block font-poppins flex-1 flex items-center justify-center p-2"
      >
        <i className={`${itemData.icon} px-1.5`}></i>
        <span className="inline-block flex-1 px-1.5">{itemData.text}</span>
      </NavLink>
    </div>
  );
}

export default SidebarItem;

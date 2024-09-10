import React from "react";
import { menuList } from "../../mock/data.js";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="px-2 w-full md:w-[250px] bg-dark border-r-2 border-subsecondary hidden md:block">
      {menuList.map((item) => {
        return <SidebarItem key={item.id} itemData={item} />;
      })}
    </div>
  );
}

export default Sidebar;

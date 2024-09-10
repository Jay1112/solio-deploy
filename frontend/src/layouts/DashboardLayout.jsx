import React from "react";
import Sidebar from "../components/layout/Sidebar";
import DashboardNavbar from "../components/layout/DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="w-screen h-screen text-light bg-dark flex flex-col">
      <DashboardNavbar />
      <main className="flex flex-1 items-stretch overflow-x-hidden overflow-y-auto">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;

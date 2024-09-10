import React from "react";
import Navbar from "../components/layout/Navbar";

function NavbarLayout({ children }) {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden bg-dark">
      <header className="absolute top-0 left-0 w-screen z-[10] bg-dark">
        <Navbar />
      </header>
      <main className="relative w-screen h-screen pt-[72px] text-light overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default NavbarLayout;

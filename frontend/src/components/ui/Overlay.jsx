import React from "react";

function Overlay({ children, className, ...props }) {
  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-[#000000b5] text-white z-[10] flex items-start justify-center "
      {...props}
    >
      <div className={className}>{children}</div>
    </div>
  );
}

export default Overlay;

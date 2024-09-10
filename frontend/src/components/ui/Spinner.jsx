import React from "react";

function Spinner({
  className = "w-[48px] h-[48px] border-4 border-light border-b-primary rounded-full inline-block animate-spin",
  textStyle = "text-secondary my-2",
  message = "",
}) {
  return (
    <>
      <div className={className}></div>
      <p className={`${textStyle}`}>{message}</p>
    </>
  );
}

export default Spinner;

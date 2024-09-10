import React from "react";

function Button({
  buttonStyle = "",
  children,
  clickHandler = () => {},
  ...props
}) {
  return (
    <button className={`${buttonStyle}`} onClick={clickHandler} {...props}>
      {children}
    </button>
  );
}

export default Button;

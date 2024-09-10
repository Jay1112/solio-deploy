import React, { useId } from "react";

const TextArea = React.forwardRef(function Input(
  {
    label = "",
    labelIcon = "",
    type = "text",
    containerStyle = "w-full",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className={`${containerStyle}`}>
      <div className="flex items-center justify-center">
        {labelIcon && (
          <i
            className={`pi pi-${labelIcon} inline-block ml-1 mr-2 text-xl`}
            htmlFor={id}
          ></i>
        )}
        {label && (
          <label className="flex-1" htmlFor={id}>
            {label}
          </label>
        )}
      </div>
      <textarea
        className={className}
        type={type}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default TextArea;

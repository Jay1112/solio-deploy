import clsx from "clsx";
import React, { useState } from "react";

function Accordian({
  HeadComponent,
  BodyComponent,
  accordianClass = "",
  accordianExpandedClass = "",
  headClass = "",
  headExpandedClass = "",
  bodyClass = "",
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div className={clsx(expand ? accordianExpandedClass : accordianClass)}>
      <div
        className={clsx(
          `flex items-stretch justify-center cursor-pointer`,
          expand ? headExpandedClass : headClass
        )}
        onClick={(e) => {
          setExpand(!expand);
        }}
      >
        <div className="flex-1">{HeadComponent}</div>
        <p className="flex items-center justify-center">
          <i
            className={expand ? "pi pi-chevron-down" : "pi pi-chevron-right"}
          ></i>
        </p>
      </div>
      {expand && <div className={clsx(`${bodyClass}`)}>{BodyComponent}</div>}
    </div>
  );
}

export default Accordian;

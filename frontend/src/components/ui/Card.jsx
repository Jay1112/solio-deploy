import clsx from "clsx";
import React from "react";

function Card({
  HeaderComponent,
  BodyComponent,
  cardStyle = "",
  headerStyle = "",
  bodyStyle = "",
}) {
  return (
    <div className={clsx("w-full md:max-w-[300px]", cardStyle)}>
      <div className={clsx(headerStyle)}>{HeaderComponent}</div>
      <div className={clsx(bodyStyle)}>{BodyComponent}</div>
    </div>
  );
}

export default Card;

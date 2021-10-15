import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props, color: "#e23744 !important" }}
      onClick={props.onClick}
    />
  );
};
export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props, color: "#e23744" }}
      onClick={props.onClick}
    />
  );
};

import React from "react";
import classNames from "classnames";
const InfoButtons = (props) => {
  return (
    <>
      <button
        className={classNames(
          "flex items-center gap-3 hover:bg-zomato_red hover:text-white  border border-zomato_red font-semibold px-4 py-2 rounded-lg",
          {
            "text-white bg-zomato_red": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </>
  );
};

export default InfoButtons;

import React from "react";
import classNames from "classnames";
const MenuCategory = (props) => {
  return (
    <>
      <div
        className={classNames({
          "text-zomato_red px-1 py-2  bg-red-100 border-r-4 border-zomato_red":
            props.isActive,
        })}
      >
        <h2  onClick={props.onClickHandler} id={props.name}>
          {props.name} ({props.items?.length})
        </h2>
      </div>
    </>
  );
};

export default MenuCategory;

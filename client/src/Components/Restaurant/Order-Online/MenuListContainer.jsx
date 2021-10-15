import React from "react";

import MenuCategory from "./MenuCategory";
const MenuListContainer = (props) => {
  
  
  return (
    <>
      <div className="w-full flex flex-col gap-4 py-2">
        <MenuCategory
          name={props.name} items={props.items}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props?.name}
        />
        
      </div>
    </>
  );
};

export default MenuListContainer;

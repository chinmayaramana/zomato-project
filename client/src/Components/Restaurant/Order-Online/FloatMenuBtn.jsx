import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MenuListContainer from "./MenuListContainer";
const FloatMenuBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked(!isClicked);
  return (
    <>
      <div className="fixed gap-3 z-30 w-8/12 flex flex-col items-end bottom-2 right-2 md:hidden ">
        <div className="p-3 h-48 overflow-y-scroll bg-white">
          <MenuListContainer />
        </div>
        <button
          className="bg-yellow-900 flex items-center gap-2 rounded-full px-3 py-2  text-white    "
          onClick={toggleMenu}
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
};

export default FloatMenuBtn;

import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown,  } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className="flex items-center   justify-between lg:hidden w-full">
      <AiOutlineArrowLeft />
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato_red text-white px-3 py-2 rounded-full">
          Use App
        </button>
        <span className="border p-2 border-gray-300 text-zomato_red rounded-full">
          <FaUserAlt />
        </span>
      </div>
    </div>
  );
};

const LargeNav = () => {
  return (
    <>
      <div className="container lg:flex hidden  mx-auto px-20">
        <div className="flex items-center w-full justify-between gap-3 lg:gap-5 lg:justify-evenly">
          <div className="w-48">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className=" bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3 w-full">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato_font">
                <HiLocationMarker size={28} />
              </span>
              <input
                type="text"
                placeholder="Hyderbad"
                className="outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center gap-2 w-full">
              <RiSearch2Line />
              <input
                type="text"
                placeholder="Search for Restaurant Cuisine or a Dish"
                className="w-full outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 ml-20 ">
            <button className="text-gray-600 text-xl hover:text-zomato_font">
              Login
            </button>
            <button className="text-gray-600 text-xl hover:text-zomato_font">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const restaurantNavbar = () => {
  return (
    <>
      <nav className="flex items-center lg:shadow-none  bg-white shadow-md p-4">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};
export default restaurantNavbar;

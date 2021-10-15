import React, { useState } from "react";

import { useParams, Link } from "react-router-dom";

import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

import classnames from "classnames";
const MobileTabs = () => {
  const [allTypes, setAlltypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line size={24} />,
      name: "Delivery",
    },
    {
      id: "dinnig",
      icon: <IoFastFoodOutline size={24} />,
      name: "Dining Out",
    },
    {
      id: "night",
      icon: <BiDrink size={24} />,
      name: "Night Life",
    },
    {
      id: "nutrition",
      icon: <IoNutritionOutline size={24} />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 w-full z-10 flex items-center justify-between font-bold text-gray-500 md:justify-evenly">
        {allTypes.map((item) => (
          <Link to={`/${item.id}`}>
            <div
              className={`relative flex items-center flex-col text-sm ${
                type === item.id && "text-zomato_font"
              }`}
            >
              <div
                className={
                  type === item.id &&
                  " border-t-4 -top-3 w-full absolute border-zomato_red"
                }
              />
              {item.icon}
              <h5>{item.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTabs = () => {
  const [allTypes, setAlltypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dinnig",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name: "Dining Out",
      activeColor: "blue",
    },
    {
      id: "night",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Night Life",
      activeColor: "purple",
    },
    {
      id: "nutrition",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      name: "Nutrition",
      activeColor: "yellow",
    },
  ]);

  const { type } = useParams();
  return (
    <>
      <div className="hidden lg:flex gap-14 my-8 container px-20 mx-auto">
        {allTypes.map((item) => (
          <Link to={`/${item.id}`}>
            <div
              className={classnames(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                {
                  "border-b-2 border-zomato_red": type === item.id,
                }
              )}
            >
              <div
                className={classnames(
                  "w-16 h-16 bg-gray-100 p-4 rounded-full",
                  { [`bg-${item.activeColor}-100`]: type === item.id }
                )}
              >
                <img
                  src={type === item.id ? item.imageActive : item.imageDefault}
                  alt={item.id}
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === item.id
                    ? "text-xl text-zomato-400"
                    : "text-xl text-gray-700"
                }
              >
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTabs />
        <LargeTabs />
      </div>
    </>
  );
};
export default FoodTab;

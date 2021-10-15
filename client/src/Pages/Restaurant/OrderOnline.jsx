import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

import { getFoodList } from "../../Redux/Reducer/Food/food.action";
const OrderOnline = () => {
  const [menus, setMenus] = useState([]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  const reduxState = useSelector(
    (globalStore) => globalStore?.RestaurantReducer?.selectedRestaurant?.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState?.menu)).then((data) =>
        setMenus(data.payload.menu.menus)
      );
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col w-1/4 border-gray-200 overflow-y-scroll">
          {menus.map((item) => (
            <MenuListContainer
              {...item}
              key={item._id}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className=" w-full md:w-3/4 px-3 h-screen ">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live track your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menus.map((item) => (
              <FoodList key={item.id} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;

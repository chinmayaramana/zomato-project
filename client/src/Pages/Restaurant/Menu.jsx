import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import MenuCollection from "../../Components/Restaurant/MenuCollection";

import { getImage } from "../../Redux/Reducer/Images/images.action";
const Menu = () => {
  const [menus, setMenus] = useState([]);

  const reduxState = useSelector(
    (globalStore) =>
      globalStore?.RestaurantReducer?.selectedRestaurant?.restaurant
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, []);
  console.log(menus);
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
      </div>
    </>
  );
};

export default Menu;

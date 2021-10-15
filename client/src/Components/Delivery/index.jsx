import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DeliveryCarousel from "./DeliveryCarousel";

import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore?.RestaurantReducer?.restaurant
  );
  useEffect(() => {
    reduxState?.restaurants && setRestaurantList(reduxState?.restaurants);
  }, [reduxState?.restaurants]);

  
  return (
    <>
      <DeliveryCarousel />
      {/* <Brand/> */}
      <div className="flex lg:my-8 justify-between flex-wrap w-full">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} />
          
        ))}
      </div>
    </>
  );
};

export default Delivery;

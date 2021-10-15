import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import Delivery from "../Components/Delivery/index";
import Dinnig from "../Components/Dinnig/index";
import NightLife from "../Components/NightLife/index";
import Nutrition from "../Components/Nutrition/index";

import { getRestaurant } from "../Redux/Reducer/Restaurant/restaurant.action";

const Master = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <div className="my-5">
      {(type === "delivery") && <Delivery />}
      {type === "dinnig" && <Dinnig />}
      {type === "night" && <NightLife />}
      {type === "nutrition" && <Nutrition />}
    </div>
  );
};

export default Master;

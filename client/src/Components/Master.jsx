import React from "react";
import { useParams } from "react-router";
import Delivery from "./Delivery";
import Dinnig from "./Dinnig";
import NightLife from "./NightLife";
import Nutrition from "./Nutrition";
const Master = () => {
  const { type } = useParams();

  return (
    <div className="my-5">
      {(type === "delivery" || null) && <Delivery />}
      {type === "dinnig" && <Dinnig />}
      {type === "night" && <NightLife />}
      {type === "nutrition" && <Nutrition />}
    </div>
  );
};

export default Master;

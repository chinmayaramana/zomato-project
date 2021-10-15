import React,{useState , useEffect} from "react";
import FoodItem from "./FoodItem";
import { getFood } from "../../../Redux/Reducer/Food/food.action";
const FoodList = (props) => {

  const [food, setFood] = useState({})

  return (
    <>
      <div className="sticky top-0 bg-white w-full px-3 py-2 z-10">
        <h2 className="text-xl font-semibold py-4  ">{props.name}</h2>
        <div className="flex flex-col gap-3">
          {props.items?.map((item) => (
            <FoodItem key={item} _id={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;

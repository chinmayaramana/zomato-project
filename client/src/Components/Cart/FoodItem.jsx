import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  DeleteCart,
  IncQty,
  DecQty,
} from "../../Redux/Reducer/Cart/cart.action";
const FoodItem = (props) => {
  const dispatch = useDispatch();
  const deleteFoodFromCart = () => dispatch(DeleteCart(props._id));

  const increment = () => dispatch(IncQty(props._id));
  const decrement = () => {
    if (props.quantity === 1) return;
    dispatch(DecQty(props._id));
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h5>{props.name}</h5>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
            <div className="bg-zomato_red text-white rounded flex items-center gap-1 px-1">
              <button
                onClick={decrement}
                className="bg-zomato_red text-white rounded p-1"
              >
                -
              </button>
              <small>{props?.quantity}</small>
              <button
                onClick={increment}
                className="bg-zomato_red text-white rounded p-1"
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill className="text-zomato_red text-lg md:text-xl" onClick={deleteFoodFromCart} />
        </div>
      </div>
      <hr className="my-1" />
    </>
  );
};

export default FoodItem;

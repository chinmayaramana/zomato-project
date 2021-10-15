import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";
import { getImage } from "../Redux/Reducer/Images/images.action";
const RestaurantCard = (props) => {

  const [image, setImage] = useState({
    images: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    props?.photos &&(

      dispatch(getImage(props.photos)).then((data) => setImage(data.payload.image.images))
      )
    }, [props?.photos]);

  return (
    <Link
      to={`/restaurant/${props._id}/`}
      className="w-full md:w-1/2 lg:w-1/3 hover:shadow-2xl transition duration-200 ease-in-out"
    >
      <div className="bg-white p-4 mb-4 border ">
        <div className="w-full h-56 lg:h-64 relative rounded-2xl">
          <div className="absolute flex items-end justify-between w-full bottom-4">
            <div className="flex flex-col gap-2 items-start">
              {props?.isPro && (
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                  Pro Extra 10% off
                </span>
              )}
              {props?.isOff && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  ₹{`${props?.isOff}`} OFF
                </span>
              )}
            </div>
            <div>
              <span className="bg-white bg-opacity-50 p-1 rounded">
                {props?.durationOfDelivery} min
              </span>
            </div>
          </div>
          <img
            // src={props?.image.images.length && props?.image?.images[0]?.location}
            src={image?.length && image[0].location}
            alt="restaurant"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props?.name}</h4>
            <span className="bg-green-800 text-sm text-white p-1 flex items-center rounded">
              {props?.restaurantReviewValue}
              <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{props?.cuisine?.join(", ")}</p>
            <p>₹{props?.averageCost} for one</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;

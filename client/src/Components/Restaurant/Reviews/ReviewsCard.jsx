import React, { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { getUser } from "../../../Redux/Reducer/User/user.action";
import dayjs from "dayjs";

const ReviewsCard = (props) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  console.log(props)

  useEffect(() => {
    dispatch(getUser(props?.user)).then((data) =>
      setUser(data.payload?.user.user.user)
    );
  });

  return (
    <>
      <div className="flex flex-col gap-4 my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/022/e153b2beba38ccf6793e5edd63fcd022.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-semibold text-lg">{user?.fullname}</h3>
              <small className="text-gray-500">
                5 Reviews &bull; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato_red border border-zomato_red py-2 px-4 rounded-lg">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white bg-green-600 text-xs px-2 py-1 rounded-lg flex items-center gap-1 ">
              4 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props?.isRestaurantReview ? "Dinnig" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("DD MM YYYY")}
            </small>
          </div>
          <div className="w-full ">
            <p className="font-regular w-full text-base text-gray-600">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;

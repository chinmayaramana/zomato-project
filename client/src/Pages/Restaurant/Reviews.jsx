import React, { useState , useEffect } from "react";
import AddReview from "../../Components/Restaurant/Reviews/AddReview";
import {useSelector , useDispatch } from 'react-redux';
import ReviewsCard from "../../Components/Restaurant/Reviews/ReviewsCard";

import {getReviews } from "../../Redux/Reducer/Reviews/review.action"

const Reviews = () => {
  const [reviews, setReviews] = useState([]);


  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getReviews(reduxState?._id)).then((data) =>
        setReviews(data.payload.reviews)
      );
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row relative">
        <div className="w-full lg:8/12 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReview />
          </div>
          {reviews.map((review) => (
            <ReviewsCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden lg:flex flex-col items-start gap-3 lg:w-4/12 sticky top-2  p-4
          shadow-md rounded-xl"
        >
          <AddReview />
        </aside>
      </div>
    </>
  );
};

export default Reviews;

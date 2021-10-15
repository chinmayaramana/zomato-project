import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IoMdArrowDropright } from "react-icons/io";

import Slider from "react-slick";

import ReactStars from "react-rating-stars-component";

import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/Delivery/Arrows";
import ReviewsCard from "../../Components/Restaurant/Reviews/ReviewsCard";
import MapView from "../../Components/Restaurant/MapView";

import { getImage } from "../../Redux/Reducer/Images/images.action";
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Overview = () => {
  const [menuImages, setMenuImages] = useState({ images: [] });
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reduxState = useSelector(
    (globalStore) => globalStore?.RestaurantReducer?.selectedRestaurant.restaurant
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });

      dispatch(getReviews(reduxState?._id)).then((data) => {
        setReviews(data.payload.reviews);
      });
    }
  }, []);


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  
  return (
    <>
       <div className="flex flex-col lg:flex-row relative">
        <div className="w-full  lg:w-8/12 ">
          <h2 className="text-lg font-semibold md:text-xl lg:text-2xl"></h2>
          <div className="flex justify-between items-center my-4">
            <h4 className="text-lg font-mdeium">Menu</h4>
            <Link to={`/res/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato_red">
                See All Menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages={menuImages?.length}
              image={menuImages}
            />
          </div>
          <h4 className="text-lg font-semibold my-2">Cuisines</h4>
          <div className="flex  flex-wrap gap-2">
            {reduxState?.cuisine.map((cuisine) => (
              <span className="border text-blue-600 px-2 py-1 rounded-full  border-gray-600">
              {cuisine}
            </span>
            ))}
            
            
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and chrages, if any
            </small>
          </div>
          <div className="my-8">
            <h4 className="text-xl pl-2 my-2 font-medium">
              Similar Restaurants
            </h4>
            <Slider {...settings}>
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg"
                title="Paradise Hotel"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg"
                title="Paradise Hotel"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg"
                title="Paradise Hotel"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg"
                title="Paradise Hotel"
              />
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg"
                title="Paradise Hotel"
              />
            </Slider>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Rate Your delivery</h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full  lg:hidden flex flex-col gap-4">
            <MapView
              title={reduxState?.name}
              phno="+918555071533"
              mapLocation={getLatLong(reduxState?.mapLocation)}
              address={reduxState?.address}
            />
          </div>
          <div className="my-6 flex flex-col gap-4">
            {reviews.map((reviewData) => (
              <ReviewsCard {...reviewData} />
            ))}
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden lg:flex flex-col gap-4 lg:w-4/12 sticky top-2  p-4
          shadow-md rounded-xl"
        >
          <MapView
              title={reduxState?.name}
              phno="+918555071533"
              mapLocation={getLatLong(reduxState?.mapLocation)}
              address={reduxState?.address}
            />
        </aside>
      </div> 
    </>
  );
};

export default Overview;

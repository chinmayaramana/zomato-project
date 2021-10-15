import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import RestaurantNavbar from "../Components/Navbar/restuarantnavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabsContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import { getSpecificRestaurant } from "../Redux/Reducer/Restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Images/images.action";

const RestaurantLayout = (props) => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: [],
    address: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) =>
        setRestaurant((prev) => ({ ...prev, ...data.payload.image }))
      );
    });
  }, []);
  console.log(restaurant)
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant.name}
          restaurantRating={restaurant.restaurantReviewValue}
          deliveryRating="3.2"
          cuisine={restaurant.cuisine.join(", ")}
          address={restaurant.address}
        />
        <div className="my-4 flex items-center flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabsContainer></TabsContainer>
        </div>
        <div className="relative"></div>
        {props.children}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;

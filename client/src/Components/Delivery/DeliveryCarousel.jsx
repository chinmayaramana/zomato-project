import React from "react";
import Slider from "react-slick";
import CategoryDelivery from "./CategoryDelivery";
import { NextArrow, PrevArrow } from "./Arrows";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/6/92236/2ea1f93f2cc89b19ee4054ada1ae3c38_o2_featured_v2.jpg",
      title: "Noodles",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/9/19564109/7c1fae04a590cf3de5d82633e0d3e204_o2_featured_v2.jpg",
      title: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/96750/fbc6d89ee2bc8b20829d9f9a8aa7cda1_o2_featured_v2.jpg",
      title: "Fried Rice",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/92320/06cce18e7ea33d8d63111e087c2df607_o2_featured_v2.jpg",
      title: "Poha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/19783010/00078c3a5782b1367a6cdfcc03f710a9_o2_featured_v2.jpg",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/4/19528724/e4c298ebe32319afa2e2979118d9d5ba_o2_featured_v2.jpg",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/2/93762/ee0128a981c02157eab1cbbee74563b0_o2_featured_v2.jpg",
      title: "Juice",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/7/19828727/0cf1c90bc40a7a573764f9d61229fba4_o2_featured_v2.jpg",
      title: "Chicken",
    },
  ];
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <h1 className="font-medium text-3xl mb-4">
        Insipiration for your first Order
      </h1>
      <div className="lg:hidden flex gap-3 md:gap-2 lg:gap-0  flex-wrap justify-between">
        {categories.map((food) => (
          <CategoryDelivery {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...setting}>
          {categories.map((food) => (
            <CategoryDelivery {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;

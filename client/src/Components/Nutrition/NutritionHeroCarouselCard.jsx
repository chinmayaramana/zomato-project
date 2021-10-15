import React from "react";

const NutritionHeroCarouselCard = ({image}) => {
  return (
    <div className="w-full h-72">
      <img
        src={image}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default NutritionHeroCarouselCard;

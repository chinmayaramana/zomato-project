import React from "react";
import NutritionCard from "./NutritionCard";
import NutritionCarousel from "./NutritionCarousel";
import NutritionHeroCarousel from "./NutritionHeroCarousel";

const Nutrition = () => {
  return (
    <div>
      <NutritionHeroCarousel />
      <div className="my-6">
        <NutritionCarousel />
      </div>
      <div className="flex justify-between flex-wrap">
        
          <NutritionCard
            bg="red"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png"
          />
          <NutritionCard
            bg="red"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png"
          />
          <NutritionCard
            bg="red"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png"
          />
          <NutritionCard
            bg="red"
            image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png"
          />
        
      </div>
    </div>
  );
};

export default Nutrition;

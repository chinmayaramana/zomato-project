import { combineReducers } from "redux";

import RestaurantReducer from "./Restaurant/restaurant.reducer";
import ImageReducer from "./Images/images.reducer";
import ReviewReducer from "./Reviews/review.reducer";
import UserReducer from "./User/user.reducer";
import FoodReducer from "./Food/food.reducer";
import AuthReducer from "./Auth/auth.reducer";
import CartReducer from "./Cart/cart.reducer";

const rootReducer = combineReducers({
  RestaurantReducer,
  ImageReducer,
  ReviewReducer,
  UserReducer,
  FoodReducer,
  AuthReducer,
  CartReducer,
});

export default rootReducer;

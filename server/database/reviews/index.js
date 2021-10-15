import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.Types.ObjectId,
      ref: "Foods",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurant",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewText: {
      type: String,
      requires: true,
    },
    isFoodReview :Boolean,
    isRestaurantReview :Boolean,
    photos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Images",
      },
    ],
    
  },
  {
    timestamps: true,
  }
);

export const ReviewsModel = mongoose.model("Reviews", ReviewSchema);

import express from "express";

import { ReviewsModel } from "../../Database/allModels";
import { ValidateSignUp } from "../../Validation/auth";
import { ValidateRestaurantId } from "../../Validation/food";

const router = express.Router();

/*
Route       /
Des         get all reviews
Params      resId
Body        none
Acess       Public
Method      GET
*/
router.get("/:resId", async (req, res) => {
  try {
    const reviews = await ReviewsModel.find({ restaurant: req.params.resId });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// router.get("/a/:123", async (req, res) => {
//   try {
//     const reviews = await ReviewsModel.find({ restaurant: req.params.resId });

//     return res.json({ reviews });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });
/*
Route       /new
Des         Add new food review
Params      none
Body        review object
Acess       Public
Method      Post
*/
router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;

    await ReviewsModel.create(reviewData);

    return res.json({ review: "Successfully Created Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /delete
Des         Delete review
Params      _id
Acess       Public
Method      Delete
*/
router.delete("/delete/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;

    await ReviewsModel.findByIdAndDelete(_id);

    return res.json({ review: "Successfully Deleted Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;

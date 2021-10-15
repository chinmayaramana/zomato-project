import express from "express";
import passport from "passport";

import { RestaurantModel } from "../../Database/allModels";

//validate
import {
  ValidateRestaurantCity,
  ValidateRestaurantSearchString,
} from "../../Validation/restaurant";
import { ValidateRestaurantId } from "../../Validation/food";

const router = express.Router();
/*
Route       /
Des         get all restauant details based on city
Params      none
Acess       Public
Method      Get
*/

router.get("/", async (req, res) => {
  try {
    await ValidateRestaurantCity(req.query);

    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// router.get("/a/:13", async (req, res) => {
//   try {
//     // await ValidateRestaurantCity(req.query);

//     const { city } = req.query;
//     const restaurants = await RestaurantModel.find();

//     return res.json({ restaurants });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

/*
Route       /
Des         get restaurant by id
Params      id
Acess       Public
Method      Get
*/

router.get("/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.parmas);

    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant Not Found" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /search
Des         get restaurant by search string
Params      none
Acess       Public
Method      Get
*/
router.get("/", async (req, res) => {
  try {
    await ValidateRestaurantSearchString(req.body);

    const { searchString } = req.body;

    const restaurant = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (!restaurant) {
      return res.status(404).json({
        error: `No Restaurants match with ${searchString},  Not Found`,
      });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;

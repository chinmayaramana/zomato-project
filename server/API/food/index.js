import express from "express";

import { FoodModel } from "../../Database/allModels";

//validate
import { ValidateRestaurantId, ValidateCategory } from "../../Validation/food";

const router = express.Router();
/*
Route       /r   
Des         get food based on restaurant
Params      _id
Acess       Public
Method      Get
*/

router.get("/r/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurants: _id });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// router.get("/r/a/:123", async (req, res) => {
//   try {
//     // await ValidateRestaurantId(req.params);

//     const { _id } = req.params;
//     const foods = await FoodModel.find();

//     return res.json({ foods });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
/*
Route       / 
Des         get food based on id
Params      _id
Acess       Public
Method      Get
*/

router.get("/:_id", async (req, res) => {
  try {

    const { _id } = req.params;
    const foods = await FoodModel.findById( _id); 

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Route       /r   
Des         get food based on category
Params      id
Acess       Public
Method      Get
*/

router.get("/r/:category", async (req, res) => {
  try {
    await ValidateCategory(req.params);

    const { catergory } = req.params;
    const foods = await FoodModel.find({ $regex: category, $options: "i" });

    return res.json({ foods });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

import express from "express";


import { MenuModel, ImageModel } from "../../Database/allModels";

//validate
import { ValidateRestaurantId } from "../../Validation/food";

const router = express.Router();
/*
Route       /list
Des         get all list  menu based on id
Params      _id
Acess       Public
Method      Get
*/

router.get("/list/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;  
    const menu = await MenuModel.findById(_id);

    return res.json({ menu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// router.get("/list/a/:id", async (req, res) => {
//   try {
//     // await ValidateRestaurantId(req.params);

//     const { _id } = req.query;
//     const menu = await MenuModel.find();

//     return res.json({ menu });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });


// Route          /image
// Des            Get all menu images based on
// Params         _id
// Access        Public
// Method        GET

router.get("/image/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req - params;
    const menus = await ImageModel.findone(_id);
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
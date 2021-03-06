import express from "express";
import passport from "passport";

import { OrderModel } from "../../Database/allModels";

//validate
import { ValidateRestaurantId } from "../../Validation/food";

const router = express.Router();

/*
Route       / 
Des         get all orders based on id
Params      _id
Acess       Public
Method      Get
*/
router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      await ValidateRestaurantId(req.params);

      const { _id } = req.params;

      const getOrders = await OrderModel.findOne({ user: _id });

      if (!getOrders) {
        return res.status(404).json({
          error: "User Not Found",
        });
      }

      return res.status(200).json({
        orders: getOrders,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route       /new
Des        add new order
Params      _id
Acess       Public
Method      Post
*/
router.post("/new/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const { orderDetails } = req.body;

    const addNewOrder = await OrderModel.findOneandUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails },
      },
      {
        new: true,
      }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;

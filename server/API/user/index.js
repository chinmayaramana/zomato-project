import express from "express";
import passport from "passport";
import { UserModel } from "../../Database/allModels";
import { ValidateRestaurantId } from "../../Validation/food";

const router = express.Router();
/*
Route       /   
Des         get user data
Params      none
Acess       Public
Method      Get
*/
router.get("/", passport.authenticate("jwt") ,  async (req, res) => {
  try {

    const { email, fullname, phoneNumber, address } =
      req.session.passport.user._doc;


    return res.json({ user: { email, fullname, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
router.get("/:_id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params._id);
    const { fullname } = user;

    return res.json({ user: { fullname } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /update   
Des         update user data
Params      _id
Body        user Data
Acess       Public
Method      Put
*/
router.put("/update/:userId", async (req, res) => {
  try {
    await ValidateSignUp(req.body);
    await ValidateRestaurantId(req.params);

    const { userId } = req.params;
    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData,
      },
      { new: true }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

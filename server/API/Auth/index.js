//Library Imports
import express from "express";
import passport from "passport";


//Model Imports
import { UserModel } from "../../Database/allModels";

//config
const router = express.Router();

//validate
import { ValidateSignUp, ValidateSignIn } from "../../Validation/auth";

/*
Route       /signup
Des         Register with credetials
Params      none
Acess       Public
Method      Post
*/

router.post("/signup", async (req, res) => {
  const { error } = await ValidateSignUp(req.body.credentials);
  if (error) return res.status(500).json({ validate: error });

  try {
    await UserModel.findByEmailAndPhoneNumber(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    res.status(200).json({ token, status: "Successful" });
  } catch (error) {
    return res.status(500).json({ error:error.message });
  }
});
/*
Route       /signip
Des         Sign Ip with email and password
Params      none
Acess       Public
Method      Post
*/
router.post("/signin", async (req, res) => {
  const { error } = await ValidateSignIn(req.body.credentials);
  if (error) return res.status(500).json({ validate: error });
  try {
    await ValidateSignIn(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    res.status(200).json({ token, status: "Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /google
Des         google sign in
Params      none
Acess       Public
Method      Get
*/
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route       /google/callback
Des         google sign callback
Params      none
Acess       Public
Method      Get
*/
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`);
  }
);
export default router;

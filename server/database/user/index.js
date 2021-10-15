import mongoose from "mongoose";
import bycrpt from "bcryptjs";
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number, required: true }],
  },
  {
    timestamps: true,
  }
);


UserSchema.methods.generateJwtToken = function (){
  return jwt.sign({user : this._id.toString() } , "zomatoUser");
}



UserSchema.statics.findByEmailAndPhoneNumber = async ({ email, phoneNumber }) => {
  //check whether email 
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User Already Exist...!");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({email , password}) => {
  //check whether email exist
  const user = await UserModel.findOne({ email });
  if(!user) throw new Error("User Doesn't Exist ... ")


  //compare the password
  const doesPasswordMatch = await bycrpt.compare(password , user.password)

  if(!doesPasswordMatch) throw new Error("Incorrect Password")

  return user;

}


UserSchema.pre("save", function (next) {
  const user = this;
  
  if (!user.isModified("password")) return next;

  bycrpt.genSalt(6, (error, salt) => {

    if (error) return next(error);
    bycrpt.hash(user.password, salt, (error, hash) => {
      
      if (error) return next(error);
      user.password = hash;
      return next();
    });
  });
});
export const UserModel = mongoose.model("Users", UserSchema);

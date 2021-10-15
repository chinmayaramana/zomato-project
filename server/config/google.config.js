import googleOAuth from "passport-google-oauth20";
import { UserModel } from "../Database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        //   creating user object
        const newUser = {
          fullname: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };                                                                                            
        // check if user exist
        try {
          const user = await UserModel.findOne({ email: newUser.email });
          // genearet token

          if (user) {
            const token = user.generateJwtToken();
            //   retun user
            done(null, { user, token });
          } else {
            //   crete new user
            const user = await UserModel.create(newUser);
            const token = user.generateJwtToken();
            // return user
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((userData, done) => done(null, id));
};

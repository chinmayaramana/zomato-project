//IMPORTS
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//DATABASE
import ConnectDB from "./Database/connection.js";

//API'S
import Auth from "./API/Auth/index";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Image from "./API/Images/index";
import Order from "./API/Orders/index";
import Review from "./API/Reviews/index";
import User from "./API/User/index";
import Pay from "./API/Payment/index"
import Menu from "./API/Menu/index";

//------------------CONFIGS--------------
import googleConfig from "./Config/google.config";
import routeConfig from "./Config/route.config";

googleConfig(passport);
routeConfig(passport);

//MIDDLEWARES
const zomato = express();
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

//MICROSERVICES
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/foods", Food);
zomato.use("/images", Image);
zomato.use("/orders", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/payments", Pay);

//ROUTES
zomato.get("/", (req, res) => {
  res.json({ message: "success" });
});

//------------------------PORT------------------
zomato.listen(4000, () =>
  ConnectDB()
    .then(() => {
      console.log("🚀");
    })
    .catch(() => {
      console.log("✅", error);
    })
);

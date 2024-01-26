import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import hotelRoute from "./routes/hotelRoutes.js";
import foodRoute from "./routes/foodRoutes.js";
import userRoute from "./routes/userRoutes.js";
import cartRoute from "./routes/cartRoutes.js";
import orderRoute from "./routes/orderRoutes.js";

const app=express();
mongoose.connect(process.env.MONGO_URL)
.then(app.listen(process.env.PORT,()=>console.log("server and database init...")))
.catch((err)=>console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/hotels",hotelRoute);
app.use("/api/foods",foodRoute);
app.use("/api/users",userRoute);
app.use("/api/cart",cartRoute);
app.use("/api/orders",orderRoute);

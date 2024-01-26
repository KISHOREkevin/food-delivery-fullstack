import express from "express";
import { createCart, deleteCart, getAllCartFoods, getCartByUser } from "../controllers/cartController.js";

const cartRoute = express.Router();

cartRoute.get("/",getAllCartFoods);
cartRoute.get("/:userid/user-cart",getCartByUser);
cartRoute.post("/:hotelid/:userid/:foodid/create-cart",createCart);
cartRoute.delete("/:cartid/delete-cart",deleteCart);
export default cartRoute;
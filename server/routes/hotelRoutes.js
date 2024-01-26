import express from "express";
import { authHotel, createHotel, deleteHotel, getAllHotel, getHotelById, updateHotel } from "../controllers/hotelController.js";
import hotelUploads from "../services/hotelUploadHandler.js";

const hotelRoute = express.Router();

hotelRoute.get("/",getAllHotel);
hotelRoute.get("/:hotelid",getHotelById);
hotelRoute.post("/create-hotel",hotelUploads.single("hotelimage"),createHotel);
hotelRoute.post("/authenticate",authHotel);
hotelRoute.patch("/:hotelid/update-hotel",hotelUploads.single("hotelimage"),updateHotel);
hotelRoute.delete("/:hotelid/delete-hotel",deleteHotel);
export default hotelRoute;
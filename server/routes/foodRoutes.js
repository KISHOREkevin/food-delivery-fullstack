import express from "express";
import { createFood, deleteFood, getAllFoods, getFoodsByCategory } from "../controllers/foodController.js";
import foodUploads from "../services/foodUploadHandler.js";

const foodRoute = express.Router();

foodRoute.get("/",getAllFoods);
foodRoute.get("/food-category",getFoodsByCategory);
foodRoute.post("/:hotelid/create-food",foodUploads.single("foodimage"),createFood);
foodRoute.delete("/:foodid/delete-food",deleteFood);
export default foodRoute;
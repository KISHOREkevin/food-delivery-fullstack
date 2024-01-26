import express from "express";
import { authUser, createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/",getAllUser);
userRoute.get("/:userid",getUserById);
userRoute.post("/create-user",createUser);
userRoute.post("/authenticate",authUser);
userRoute.patch("/:userid/update-user",updateUser);
userRoute.delete("/:userid/delete-user",deleteUser);

export default userRoute;
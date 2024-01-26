import Food from "../models/foodModel.js";
import cloudinary from "../configs/cloud.config.js";
import fs from "fs";
export const getAllFoods=async(req,res)=>{
    let foods;
    try {
        foods=await Food.find();
        if(foods.length===0){
            return res.status(404).json({message:"Foods not found.."});
        }
        return res.status(200).json({foods});
    } catch (error) {
        console.log(error);
    }
}

export const getFoodsByCategory=async(req,res)=>{
    let {foodid,hotelid} = req.query;
    let foodByfoodid;
    let foodbyhotelid;
    try {
        foodByfoodid=await Food.findById(foodid).populate("foodhotel");
        foodbyhotelid=await Food.find({foodhotel:hotelid});
        if(!foodByfoodid && foodbyhotelid.length===0){
            return res.status(404).json({message:"Food Not Found..."})
        }
        return res.status(200).json({foodByfoodid,foodbyhotelid});
    } catch (error) {
        console.log(error);
    }
}



export const createFood =async(req,res)=>{
    let {foodname,foodprice}=req.body;
    let {hotelid}=req.params;
    let foodimage;
    let food;
    try {
       
        try {
            foodimage = await cloudinary.uploader.upload(req.file.path,{folder:"food-delivery-project/foodimages"});
        } catch (error) {
            console.log(error);
        }
        food=new Food({foodname,foodprice,foodimage:foodimage.secure_url,foodhotel:hotelid,foodimageid:foodimage.public_id});
        if(!food){
            return res.status(404).json({message:"Food not created ..."});
        }
        food.save();
        return res.status(200).json({message:"Food created ..."});
    } catch (error) {
        console.log(error);
    }
}

export const deleteFood = async(req,res)=>{
    let {foodid} = req.params;
    let food;
    try {
        food=await Food.findByIdAndDelete(foodid);
        
        if(!food){
            return res.status(404).json({message:"Food not found .."});
        }
        try {
            await cloudinary.uploader.destroy(food.foodimageid);
        } catch (error) {
            console.log(error);
        }
        return res.status(200).json({message:"Food Deleted ..."});
        
    } catch (error) {
        console.log(error);
    }
}
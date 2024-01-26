import Hotel from "../models/hotelModel.js";
import Food from "../models/foodModel.js";
import bcrypt from "bcrypt";
import "dotenv/config.js";
import cloudinary from "../configs/cloud.config.js";
import fs from "fs";
export const getAllHotel = async(req,res)=>{
    let hotels;
    try {
        hotels= await Hotel.find();
        
        if(hotels.length===0){
            return res.status(404).json({message:"Hotels not found..."})
        }
        return res.status(200).json({hotels});
    } catch (error) {
        console.log(error);
    }
}

export const getHotelById=async(req,res)=>{
    let {hotelid} = req.params;
    let hotel;
    try {
        hotel=await Hotel.findById(hotelid);
        if(!hotel){
            return res.status(404).json({message:"Hotel not found ..."});
        }
        return res.status(200).json({hotel});
    } catch (error) {
        console.log(error);
    }
}

export const createHotel=async(req,res)=>{
    let {hotelname,hotelmail,hotelpassword,hoteladdress,hotelphno} = req.body;
    let hotelimage;
    let hashedpassword;
    let hotel;
    let existinghotel;
    try {
        existinghotel = await Hotel.findOne({hotelmail});
        if(existinghotel){
            return res.status(404).json({message:"Hotel with this mail already exists ..."});
        }

        hashedpassword=bcrypt.hashSync(hotelpassword,Number(process.env.SALT_ROUNDS));
        try {
            hotelimage = await cloudinary.uploader.upload(req.file.path,{folder:"food-delivery-project/hotelimages"});  
        } catch (error) {
            console.log(error);
        }
        
        hotel=new Hotel({hotelname,hotelmail,hotelpassword:hashedpassword,hotelimage:hotelimage.secure_url,hoteladdress,hotelphno,hotelimageid:hotelimage.public_id});
        if(!hotel){
            return res.status(404).json({message:"User not created"})
        }
        hotel.save();
        return res.status(201).json({message:"Hotel created ..."});
    } catch (error) {
        console.log(error);
    }
}

export const authHotel=async(req,res)=>{
    let {hotelmail,hotelpassword}=req.body;
    let hotel;
    let valid;
    try {
        hotel = await Hotel.findOne({hotelmail});
        if(!hotel){
            return res.status(404).json({message:"Hotel not found with this mail..."});
        }
        valid = bcrypt.compareSync(hotelpassword,String(hotel.hotelpassword));
        if(!valid){
            return res.status(401).json({message:"Password mismatch..."});
        }
        return res.status(200).json({message:"Signin successfull",hotel});
    } catch (error) {
        console.log(error);
    }
}

export const updateHotel=async(req,res)=>{
    let {hotelname,hotelmail,hotelpassword,hoteladdress,hotelphno} = req.body;
    let {hotelid}=req.params;
    let hotelimage=req.file.filename;
    let hashedpassword;
    let hotel;
    try {
        hashedpassword=bcrypt.hashSync(hotelpassword,Number(process.env.SALT_ROUNDS));
        hotel=await Hotel.findByIdAndUpdate(hotelid,{hotelname,hotelmail,hotelpassword:hashedpassword,hoteladdress,hotelphno,hotelimage});
        if(!hotel){
            return res.status(404).json({message:"Hotel not found..."});
        }
        fs.unlink(`uploads/hotelUploads/${hotel.hotelimage}`,(err)=>{
            if(err) throw err;
        })
        return res.status(200).json({message:"Hotel updates successfully .."});
    } catch (error) {
        console.log(error);
    }
}

export const deleteHotel = async (req,res)=>{
    let {hotelid} = req.params;
    let hotel;
    let foods;
    try {
        foods=await Food.find({foodhotel:hotelid});
        await Food.deleteMany({foodhotel:hotelid});
        hotel = await Hotel.findByIdAndDelete(hotelid);
        try {
            await cloudinary.uploader.destroy(hotel.hotelimageid);
        } catch (error) {
            console.log(error);
        }
        
        if(!hotel){
            return res.status(404).json({message:"Hotel not found "});
        }
        return res.status(200).json({message:"Hotel deleted"});
        
    } catch (error) {
        console.log(error);
    }

}
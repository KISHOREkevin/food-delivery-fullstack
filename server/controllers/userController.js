import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import "dotenv/config.js";
export const getAllUser = async(req,res)=>{
    let users;
    try {
        users=await User.find();
        if(users.length===0){
            return res.status(404).json({message:"Users not found.."});
        }
        return res.status(200).json({users});
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async(req,res)=>{
    let {userid} = req.params;
    let user;
    try {
        user = await User.findById(userid);
        if(!user){
            return res.status(404).json({message:"User not found ..."});
        }
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}

export const createUser=async(req,res)=>{
    let {username,usermail,userpassword,useraddress,userphno} = req.body;
    let hashedpassword;
    let user;
    let existingUser;
    try {
        existingUser=await User.findOne({usermail});
        if(existingUser){
            return res.status(404).json({message:"User already exists with this mail.."});
        }
        hashedpassword = bcrypt.hashSync(userpassword,Number(process.env.SALT_ROUNDS));
        user = new User({username,usermail,userpassword:hashedpassword,useraddress,userphno});
        if(!user){
            return res.status(404).json({message:"User not created"});
        }
        user.save();
        return res.status(200).json({message:"user created ..."});
    } catch (error) {
        console.log(error);
    }
}

export const authUser = async(req,res)=>{
    let {usermail,userpassword} = req.body;
    let user;
    let valid;
    try {
        user=await User.findOne({usermail});
        if(!user){
            return res.status(404).json({message:"User with this mail not found ..."});
        }
        valid=bcrypt.compareSync(userpassword,user.userpassword);
        if(!valid){
            return res.status(401).json({message:"Password mismatch...",valid});
        }
        return res.status(200).json({user,message:"signin succesfull..."});
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async(req,res)=>{
    let {userid} = req.params;
    let {username,usermail,userpassword,useraddress,userphno}=req.body;
    let user;
    try {
        user = await User.findByIdAndUpdate(userid,{username,usermail,userpassword,useraddress,userphno});
        if(!user){
            return res.status(404).json({message:"User not found.."})
        }
        return res.status(200).json({message:"User updated.."});
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req,res)=>{
    let {userid} = req.params;
    let user;
    try {
        user = await User.findByIdAndDelete(userid);
        if(!user){
            return res.status(404).json({message:"User not found.."});
        }
        return res.status(200).json({message:"User deleted..."});
    } catch (error) {
        console.log(error);
    }
}
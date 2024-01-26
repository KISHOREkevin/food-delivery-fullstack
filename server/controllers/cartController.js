import Cart from "../models/cartModel.js";

export const getAllCartFoods = async (req,res)=>{
    let cartFoods;
    try {
        cartFoods=await Cart.find();
        if(cartFoods.length===0){
            return res.status(404).json({message:"No Foods Found"})
        }
        return res.status(200).json({cartFoods});
    } catch (error) {
        console.log(error);
    }
}

export const getCartByUser= async(req,res)=>{
    let {userid}=req.params;
    let usercarts;
    try {
        usercarts = await Cart.find({userdetail:userid}).populate(["userdetail","hoteldetail","fooddetail"]);
        if(usercarts.length===0){
            return res.status(404).json({message:"Your cart is empty"});
        }
        return res.status(200).json({usercarts});
    } catch (error) {
        console.log(error);
    }
}

export const createCart = async (req,res)=>{
    let {userid,hotelid,foodid} = req.params;
    let cart;
    try {
        cart=new Cart({userdetail:userid,hoteldetail:hotelid,fooddetail:foodid});
        if(!cart){
            return res.status(404).json({message:"Food not added to cart.."});
        }
        cart.save();
        return res.status(200).json({message:"Food added to cart.."})
    } catch (error) {
        console.log(error);        
    }
}

export const deleteCart = async(req,res)=>{
    let {cartid} = req.params;
    let cart;
    try {
        cart = await Cart.findByIdAndDelete(cartid);
        if(!cart){
            return res.status(404).json({message:"Cart Food not found..."});
        }
        return res.status(200).json({message:"Cart deleted.."})
    } catch (error) {
        console.log(error);
    }
}
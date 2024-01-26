import Order from "../models/orderModel.js";

export const getAllOrders = async(req,res)=>{
    let orders;
    try {
        orders=await Order.find().populate({path:"cartdetail",populate:["fooddetail","hoteldetail","userdetail"]});
        if(orders.length===0){
            return res.status(404).json({message:"No orders found.."});
        }
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
    }
}

export const getOrderByCartId = async (req,res)=>{
    let {cartid} = req.params;
    let orders;
    let status;
    try {
        orders = await Order.find({cartdetail:cartid});
        if(orders.length===0){
            status=false;
            return res.status(404).json({status});
        }
        status=true;
        return res.status(200).json({orders,status});
    } catch (error) {
        console.log(error);
    }
}

export const getOrdersByStatus = async(req,res)=>{
    let {hotelid} = req.params;
    let {pending} = req.query;
    let orders;
    try {
        orders = await Order.find({hoteldetail:hotelid,pending}).populate(["userdetail",{path:"cartdetail",populate:"fooddetail"}]);
        if(orders.length===0){
            return res.status(404).json({message:"No orders found.."});
        }
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
    }
}

export const getOrdersByUserId = async (req,res)=>{
    let {userid} = req.params;
    let orders;
    try {
        orders = await Order.find({userdetail:userid}).populate({path:"cartdetail",populate:"fooddetail"});
        if(orders.length===0){
            return res.status(404).json({message:"No orders found"});
        }
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
    }
}

export const getOrdersByHotelId = async(req,res)=>{
    let {hotelid} = req.params;
    let orders;
    try {
        orders = await Order.find({hoteldetail:hotelid}).populate(["userdetail",{path:"cartdetail",populate:"fooddetail"}]);
        if(orders.length===0){
            return res.status(404).json({message:"No orders found.."});
        }
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
    }
}

export const createOrder = async(req,res)=>{
    let {cartid} = req.params;
    let {userdetail,quantity,totalamount,hoteldetail} = req.body;
    let order;
    try {
        order = new Order({cartdetail:cartid,quantity,totalamount,userdetail,hoteldetail});
        if(!order){
            return res.status(404).json({message:"Order not created"});
        }
        order.save();
        return res.status(200).json({message:"Order created"});
    } catch (error) {
        console.log(error);
    }
}

export const changeOrderStatus = async(req,res)=>{
    let {pending} = req.body;
    let {orderid} = req.params;
    let order;
    try {
        order=await Order.findByIdAndUpdate(orderid,{pending});
        if(!order){
            return res.status(404).json({message:"Order not found.."});
        }
        return res.status(200).json({message:"order approved ..."});
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = async(req,res)=>{
    let {orderid} = req.params;
    let order;
    try {
        order=await Order.findByIdAndDelete(orderid);
        if(!order){
            return res.status(404).json({message:"Order not found.."});
        }
        return res.status(200).json({message:"Order delete"});
    } catch (error) {
        console.log(error);
    }
}
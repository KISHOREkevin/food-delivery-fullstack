import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userdetail:{ref:"User",type:mongoose.Schema.Types.ObjectId},
    hoteldetail:{ref:"Hotel",type:mongoose.Schema.Types.ObjectId},
    fooddetail:{ref:"Food",type:mongoose.Schema.Types.ObjectId},
    
},{timestamps:true});

const Cart = mongoose.model("Cart",cartSchema);

export default Cart;
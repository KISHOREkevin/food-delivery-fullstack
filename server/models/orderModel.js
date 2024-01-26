import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    cartdetail:{ref:"Cart",type:mongoose.Schema.Types.ObjectId},
    userdetail:{ref:"User",type:mongoose.Schema.Types.ObjectId},
    hoteldetail:{ref:"Hotel",type:mongoose.Schema.Types.ObjectId},
    pending:{type:Boolean,default:true},
    quantity:{type:Number,default:1},
    totalamount:{type:Number,default:0}
},{timestamps:true});

const Order = mongoose.model("Order",orderSchema);

export default  Order;
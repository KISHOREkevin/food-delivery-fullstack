import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    hotelname:{type:String,required:true},
    hotelmail:{type:String,required:true},
    hotelpassword:{type:String,required:true},
    hotelimage:{type:String,required:true},
    hoteladdress:{type:String,required:true},
    hotelphno:{type:Number,required:true},
    hotelimageid:{type:String}
})

const Hotel=mongoose.model("Hotel",hotelSchema);

export default Hotel;
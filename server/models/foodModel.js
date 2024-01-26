import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodname:{type:String,required:true},
    foodprice:{type:Number,required:true},
    foodimage:{type:String,required:true},
    foodhotel:{ref:"Hotel",type:mongoose.Schema.Types.ObjectId,required:true},
    foodimageid:{type:String}
})
const Food = mongoose.model("Food",foodSchema);

export default Food;
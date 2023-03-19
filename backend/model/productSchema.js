
import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
    name:  {type:String, required:true}, 
    category: {type:String, required:true},
    price:   {type:Number, required:true},
    rating: {type:Number, required:true},
   
    details: Object,
    image : {type:String, required:true},
    images : {type:[String], required:true},
  }, {timestamps: true});



const productModel= mongoose.model("productStore",productSchema)


export default productModel
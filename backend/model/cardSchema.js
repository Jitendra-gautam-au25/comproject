import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    items:  {type:[Object], required:true, default:[]}, 
    userId: {type: String, default:1},
},{timestamps: true})

const cartModel= mongoose.model("cartStore",cartSchema)


export default cartModel
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    addresses : {type:[Object], default:[]},
    orders :[{ type:Object, ref: 'Order' }]
}, {timestamps: true});

const UserModel= mongoose.model("userStore",userSchema)


export default UserModel
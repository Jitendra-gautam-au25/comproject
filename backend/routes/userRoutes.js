import express from "express"
import Usercontroller from "../Controller/UserController.js";



const router=express.Router()

router.post("/login",Usercontroller.loginUser);
router.post("/signup",Usercontroller.createUser);




export default router

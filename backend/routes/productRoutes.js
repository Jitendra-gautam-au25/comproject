import express from "express"
import ProductController from "../Controller/Product.js";
const router= express.Router()


router.post("/createProd",ProductController.createProduct);
router.get("/AllProd",ProductController.allProduct);


export default router

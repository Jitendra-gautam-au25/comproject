import express from "express"
import CardController from "../Controller/CartController.js";
const router= express.Router()


router.post("/cart",CardController.cardShow);
router.delete("/removeitem",CardController.removeItem);


export default router
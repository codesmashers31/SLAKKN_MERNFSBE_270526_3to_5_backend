import express from "express";
import {
createOrder,
getOrders
} from "../controllers/orderController.js";

// http://localhost:5000/api/order/insert

// http://localhost:5000/api/order/get

const router = express.Router();

router.post("/insert", createOrder);
router.get("/get", getOrders);
export default router;
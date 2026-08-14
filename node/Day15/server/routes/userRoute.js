import express from "express";
import { createUser } from "../controllers/userController.js";


// http://localhost:5000/api/user/insert

// http://localhost:5000/api/order/get

const router = express.Router();

router.post("/insert", createUser);

export default router;
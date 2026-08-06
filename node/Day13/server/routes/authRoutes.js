import express from 'express'
import { registerData,loginData, dashboardData } from '../controllers/authController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login

// http://localhost:5000/api/auth/dashboard

const routes = express.Router()


routes.post("/register",registerData)
routes.post("/login",loginData)
routes.get("/dashboard",authMiddleware,dashboardData)

export default routes
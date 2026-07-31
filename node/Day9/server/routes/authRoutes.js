import express from 'express'
import { registerData,loginData } from '../controllers/authController.js'

// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login

const routes = express.Router()

routes.post("/register",registerData)
routes.post("/login", loginData)

export default routes
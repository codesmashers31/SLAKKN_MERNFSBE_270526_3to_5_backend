import express from 'express'
import { register } from '../controllers/authController.js'

// with end point
// http://localhost:5000/api/auth/register 

const route = express.Router()


route.post("/register",register)


export default route
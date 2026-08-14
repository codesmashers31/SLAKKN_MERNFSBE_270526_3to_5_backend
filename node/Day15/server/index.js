import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoute from './routes/authRoutes.js'
import orderRoute from './routes/orderRoute.js'
import userRoute from './routes/userRoute.js'
dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/order",orderRoute)
app.use("/api/user",userRoute)
const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Running http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/order
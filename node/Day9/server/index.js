import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import userRoute from './routes/userRoutes.js'
import authRoute from './routes/authRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Running http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/auth
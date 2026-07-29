import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'



dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Running http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/requestobj
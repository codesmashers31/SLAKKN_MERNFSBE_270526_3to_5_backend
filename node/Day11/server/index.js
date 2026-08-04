import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import curdRourt from './routes/curdRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/curd",curdRourt)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server Running http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/curd
import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import connectDB from "./config/db.js";

import imageRoutes from "./routes/imageRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());


// Static folder

app.use(

    "/uploads",

    express.static("uploads")

);


// Routes

app.use(

    "/api/images",

    imageRoutes

);


app.get("/api", (req, res) => {

    res.send("Server Running");

});


app.listen(

    process.env.PORT,

    () => {

        console.log(

            `Server Running on ${process.env.PORT}`

        );

    }

);
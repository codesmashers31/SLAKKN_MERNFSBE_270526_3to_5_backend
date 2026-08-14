import express from "express";

import upload from "../middleware/uploadMiddleware.js";

import {

    uploadLocalImage,

    uploadCloudinaryImage,

    getImages

} from "../controllers/imageController.js";

const router = express.Router();


// Normal Local Upload

router.post(

    "/local",

    upload.single("image"),

    uploadLocalImage

);


// Cloudinary Upload

router.post(

    "/cloudinary",

    upload.single("image"),

    uploadCloudinaryImage

);


// Get Images

router.get(

    "/getimage",

    getImages

);

export default router;
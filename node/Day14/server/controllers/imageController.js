import Image from "../models/imageModel.js";

import cloudinary from "../config/cloudinary.js";

import fs from "fs";


// Normal Upload

export const uploadLocalImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: "Image Required"

            });

        }

        const image = await Image.create({

            name: req.body.name,

            imageUrl: `/uploads/${req.file.filename}`,

            uploadType: "local"

        });

        res.status(201).json({

            message: "Image Uploaded",

            image

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Cloudinary Upload

export const uploadCloudinaryImage = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: "Image Required"

            });

        }

        const result = await cloudinary.uploader.upload(

            req.file.path,

            {

                folder: "student-images"

            }

        );

        const image = await Image.create({

            name: req.body.name,

            imageUrl: result.secure_url,

            uploadType: "cloudinary"

        });

        fs.unlinkSync(req.file.path);

        res.status(201).json({

            message: "Cloudinary Upload Success",

            image

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Get Images

export const getImages = async (req, res) => {

    try {

        const images = await Image.find();

        res.status(200).json(images);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
const express= require("express")
const router= express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const UserController=require("../controllers/UserController");
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;

const storage = multer.memoryStorage();  // Use memoryStorage for Cloudinary upload
const upload = multer({ storage: storage });

router.post("/career-seeker",upload.single('cv'),UserController.apply)
router.post("/inquiries",UserController.Inquiries)


module.exports= router; 
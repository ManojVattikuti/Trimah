const express= require("express")
const router= express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const UserController=require("../controllers/UserController");
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });

router.post("/inquiries",UserController.Inquiries)
router.post("/applytoceipal",upload.single('cv'),UserController.applyToCeipal)


module.exports= router; 
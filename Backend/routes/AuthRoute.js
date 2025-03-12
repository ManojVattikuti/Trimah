const express= require("express")
const router= express.Router();
const AuthController=require("../controllers/AuthControllers");
const authMiddleware = require("../middleware/AuthMiddleware");

router.post("/register",AuthController.register)
router.post("/verify-otp",AuthController.verifyOtp)
router.post("/login",AuthController.login)
router.post("/sendmail",AuthController.sendMail)
router.post("/forgot-password",AuthController.forgotPassword)
router.post("/reset-password",AuthController.resetPassword)

router.get("/userDetails",authMiddleware,AuthController.getUserDetails)

module.exports= router; 
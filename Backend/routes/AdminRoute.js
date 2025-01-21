const express= require("express")
const router= express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const AdminController=require("../controllers/AdminControllers");

router.get("/getUsers",authMiddleware,AdminController.getUsers)
router.get("/getMessages",authMiddleware,AdminController.getMessages)
router.get("/applications",authMiddleware,AdminController.getApplication)


module.exports= router; 
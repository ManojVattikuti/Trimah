const express= require("express")
const router= express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const AdminController=require("../controllers/AdminControllers");

router.get("/getUsers",authMiddleware,AdminController.getUsers)
router.get("/getMessages",authMiddleware,AdminController.getMessages)
router.get("/applications",authMiddleware,AdminController.getApplication)
router.get("/getJobs",AdminController.getJobs)
router.get("/getTokens",AdminController.getToken)
router.delete("/deleteApplication/:id",AdminController.DeleteApplication)
router.post("/deleteApplications",authMiddleware,AdminController.deleteApplications)
router.delete("/deleteInquiry/:id",AdminController.DeleteInquiry)
router.post("/deleteinquiries",authMiddleware,AdminController.deleteInquiries)

router.delete("/deleteuser/:id",AdminController.deleteuser)
router.post("/adduser",AdminController.adduser)


router.get("/dashboard-stats",AdminController.dashboarddata)
router.get("/applicants-stats",AdminController.getApplicantStats)
router.get("/inquiry-stats",AdminController.getInquiryStats)

router.get("/recent-applicants",AdminController.getRecentApplicants)
router.get("/recent-inquiry",AdminController.getRecentInquiries)



module.exports= router; 
const express= require("express")
const router= express.Router();
const authMiddleware = require("../middleware/AuthMiddleware");
const UserController=require("../controllers/UserController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if (ext !== '.pdf' && ext !== '.doc' && ext !== '.docx') {
        return cb(new Error('Only PDF, DOC, and DOCX files are allowed.'));
      }
      cb(null, true);
    },
  });

router.post("/apply",authMiddleware,upload.single('resume'),UserController.apply)


module.exports= router; 
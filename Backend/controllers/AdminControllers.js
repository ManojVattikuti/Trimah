const applicationModel = require("../model/applicationModel");
const ContactModel = require("../model/ContactModel");
const UserModel = require("../model/UserModel");


const getUsers = async (req, res) => {
    try {
      const users = await UserModel.find(); // Await the promise returned by find()
      res.json({
        users,
        message: "Successfully fetched users",
        success: true
      });
    } catch (error) {
      console.error(error); // Log the error to the console
      res.status(500).json({
        message: "An error occurred while fetching users",
        success: false
      });
    }
  };

  const getMessages = async(req,res)=>{
    try {
        const messages = await ContactModel.find().sort({ createdAt: -1 });
       
        res.json({
          messages,
          message: "Successfully fetched messages",
          success: true
        });
      } catch (error) {
        console.error(error); // Log the error to the console
        res.status(500).json({
          message: "An error occurred while fetching users",
          success: false
        });
      }
    };
   
    const getApplication = async(req,res)=>{
      console.log("hjk");
      try {
        
    
          const applications = await applicationModel.find().sort({ createdAt: -1 });
         
          res.json({
              applications,
            message: "Successfully fetched Applications",
            success: true
          });
        } catch (error) {
          console.error(error); // Log the error to the console
          res.status(500).json({
            message: "An error occurred while fetching users",
            success: false
          });
        }
      };
    
   
module.exports={
    getUsers,
    getMessages,
    getApplication,
}




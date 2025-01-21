const mongoose= require("mongoose");
const dotenv= require("dotenv")
dotenv.config()

const MongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        console.log("MONGODB CONNECTED");
        
    } catch (error) {
        console.log("error",error.message);
        process.exit(1)
        
    }
}
module.exports=MongoDB;
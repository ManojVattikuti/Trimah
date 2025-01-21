const express = require("express");
const app= express();
const cors = require('cors');
const dotenv= require("dotenv")
const MongoDB = require("./config/db");
const path = require('path');
const authRoute = require("./routes/AuthRoute");
const adminRoute = require("./routes/AdminRoute");
const userRoute = require("./routes/UserRoute");
const { errorHandler } = require("./middleware/errorhandlers");

dotenv.config()

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth",authRoute)
app.use("/api/admin",adminRoute)
app.use("/api/user",userRoute)

app.use(errorHandler);

MongoDB();

const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
console.log(`conected localhost/:${PORT}`);
})
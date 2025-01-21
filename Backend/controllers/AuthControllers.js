const User = require("../model/UserModel");
const bcrypt = require('bcryptjs');
const jwt= require("jsonwebtoken")
const dotenv= require("dotenv")
const nodemailer = require('nodemailer');
const ContactModel = require("../model/ContactModel");
dotenv.config();


const register = async(req,res)=>{
    const {firstName,lastName,email,password,role}=req.body;
    console.log(req.body);
    try {
        const UserExist= await User.findOne({email});//checking user exist or not 

        if(UserExist){
            return res.status(400).json({message:"user already exists"});//
        }
        const salt = await bcrypt.genSalt(10) // generate  salt
        const hashedpassword = await bcrypt.hash(password,salt) // bcrypting password with salt
        
        const user= new User({
          firstName,
          lastName,
            email,
            password:hashedpassword, 
            role
        })
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Login Controller
const login = async (req, res) => {
  console.log('Request body:', req.body);
  const { email, password } = req.body;
  
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }
    console.log('User found:', user);

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    console.log('Password matched');

    // Generate the JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('Token generated:', token);

    // Send the response with the token and user details
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
};

const getUserDetails = async (req, res) => {
  
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,  // Replace with your Gmail email address
    pass:process.env.PASS         // Replace with your Gmail password
  }
});


const sendMail= async(req,res)=>{
  const { name, email, message } = req.body;

  try {
    const contact= new ContactModel({
name:name,
email:email,
message:message
    })
    await contact.save()
    // Compose email
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: "tpjishnu5@gmail.com", // Replace with your own email address for testing
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
  
  
module.exports= {register,
    login,
    getUserDetails,
    sendMail
}
const User = require("../model/UserModel");
const bcrypt = require('bcryptjs');
const jwt= require("jsonwebtoken")
const dotenv= require("dotenv")
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const ContactModel = require("../model/ContactModel");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,  // Replace with your Gmail email address
    pass:process.env.PASS         // Replace with your Gmail password
  }
});



const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // If user exists and is not verified, resend OTP
    if (existingUser && !existingUser.isVerified) {
      const otp = crypto.randomInt(100000, 999999).toString(); // Generate 6-digit OTP
      const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

      existingUser.otp = otp;
      existingUser.otpExpiresAt = otpExpiresAt;
      await existingUser.save();

      // Resend OTP Email
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: 'Resend OTP for Email Verification',
        text: `Your new OTP code is ${otp}. It is valid for 10 minutes.`,
      });

      return res.status(200).json({ msg: 'User not verified. OTP resent to email.' });
    }

    // If user exists and is verified, return an error
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists and is verified.' });
    }

    // Create a new user with OTP
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = crypto.randomInt(100000, 999999).toString(); // Generate 6-digit OTP
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      otp,
      otpExpiresAt,
    });
    await user.save();

    // Send OTP Email
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "tpjishnu5@gmail.com",
      subject: 'Verify your email',
      text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
    });

    res.status(201).json({ msg: 'Registration successful. OTP sent to email.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};




const verifyOtp= async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (user.isVerified) return res.status(400).json({ msg: 'User already verified' });

    if (user.otp !== otp || user.otpExpiresAt < new Date()) {
      return res.status(400).json({ msg: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.status(200).json({ msg: 'Email verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
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

    // Check if the user's email is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email to log in' });
    }

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
      { expiresIn: '1d' }
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
  
  
module.exports= {register,verifyOtp,
    login,
    getUserDetails,
    sendMail
}
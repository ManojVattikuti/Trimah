const mongoose = require('mongoose');

// Define the UserSchema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    otp: { type: String },

    otpExpiresAt: { type: Date },

    isVerified: { type: Boolean, default: false },

}, { timestamps: true });

// Middleware to generate a username
// UserSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('name')) {
//         // Generate a username based on the 'name' field
//         let username = this.name.toLowerCase().replace(/\s+/g, '.'); // Replace spaces with a dot

//         // Ensure the username is unique by appending a random number if necessary
//         let user = await mongoose.model('User').findOne({ username });
//         let counter = 1;
//         while (user) {
//             username = `${username}${Math.floor(Math.random() * 1000)}`;
//             user = await mongoose.model('User').findOne({ username });
//             counter++;
//         }

//         this.username = username;
//     }
//     next();
// });

module.exports = mongoose.model('User', UserSchema);

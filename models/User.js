// models/User.js
const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    label: String,
    street: String,
    city: String,
    postalCode: String,
    country: String
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: [AddressSchema],
    role: { type: String, enum: ['sa', 'admin', 'moderator', 'user'], default: 'user' },
    profilePicture: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

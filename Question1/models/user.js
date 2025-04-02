import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    name: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number']
    },
    githubUsername: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    collegeName: {
        type: String,
        required: true
    },
    accessCode: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);



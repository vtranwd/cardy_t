import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    accountNumber: Number,
    name: String,
    username: String,
    password: String,
    email: String,
    languages: [
        cards:[String]
    ],

})
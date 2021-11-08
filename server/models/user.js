import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    accountNumber: Number,
    name: String,
    username: String,
    password: String,
    email: String,
    subjectLanguage:[String]

});

const user = mongoose.model('user', userSchema);

export default user;
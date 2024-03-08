import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        rquired: true,
        unique:true,
    },
    email:{
        type: String,
        rquired: true,
        unique:true,
    },
    password:{
        type: String,
        rquired: true,
    }

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

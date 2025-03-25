import mongoose, { Schema } from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:'string',
        required:true

    },
    email:{
        type:'string',
        required:true,
        unique:true
    },
    password:{
        type:'string',
        required:true

    },
    
})
const user=mongoose.model("user",userSchema)
export default user
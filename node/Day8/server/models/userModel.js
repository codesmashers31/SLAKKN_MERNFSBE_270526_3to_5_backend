import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

   name:{type:String,required:true,trim:true},
   email:{type:String,unique:true,lowercase:true},
   age:Number,
   createdBy: { 
    type: String, 
    default: "Admin" 
  }

},{timestamps:true})

const userModel = mongoose.model("studentData",userSchema)

export default userModel
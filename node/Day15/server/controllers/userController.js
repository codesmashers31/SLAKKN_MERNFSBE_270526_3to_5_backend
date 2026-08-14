import User from "../models/user.js";

export const createUser = async (req,res) =>{


  try {
    const {name,email} =  req.body

const user = await User.create({name, email});
 
res.status(201).json({msg:"running correctly"})


  } catch (error) {

    console.log(error);
    
  }



}
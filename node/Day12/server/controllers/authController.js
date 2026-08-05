import authModel from "../models/authModel.js";
import bcrypt from 'bcrypt'
export const registerData = async(req,res)=>{


    try {

        const {username,useremail,userpassword} = req.body

        const changepassword = await bcrypt.hash(userpassword,10)
        
        const regi = await authModel.create({username,useremail,userpassword:changepassword})
       
        res.status(201).json({msg:"Successfully register"})
        
    } catch (error) {

        console.log('error',error);
        res.Status(500).json({msg:error})
        
        
    }

}





export const loginData = async (req,res)=>{

    try {

        const {useremail,userpassword} = req.body

        const checkEmail = await authModel.findOne({useremail})

        if(!checkEmail) {
            return res.status(409).json({msg:"Invalid Email try New"})
        }

        const passwordCheck = await bcrypt.compare(userpassword,checkEmail.userpassword)

        if(!passwordCheck){

            return res.status(404).json({msg:"Password Mismatch"})

        }

        res.status(200).json({msg:"success",users:{id:checkEmail._id,email:checkEmail.useremail}})
        
    } catch (error) {

          console.log('error',error);
        res.Status(500).json({msg:error})
        
        
        
    }

}
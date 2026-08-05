import authModel from "../models/authModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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

        const token = await jwt.sign({id:checkEmail._id,name:checkEmail.username},process.env.JWT_SECRET,{expiresIn:"1d"})
          
         
        //console.log(token);
        


        res.status(200).json({msg:"success",users:{id:checkEmail._id,email:checkEmail.useremail},token})
        
    } catch (error) {

          console.log('error',error);
        res.Status(500).json({msg:error})
        
        
        
    }

}
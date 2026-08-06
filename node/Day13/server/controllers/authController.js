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

            const user = await authModel.findOne({useremail})

            if(!user) {
                return res.status(409).json({msg:"Email not valid"})
            }

            const passwordcheck = await bcrypt.compare(userpassword,user.userpassword);

            if(!passwordcheck) {
                return res.status(404).json({msg:"Password is not valid"})
            }
         
          const accesstoken = jwt.sign({id:user._id,name:user.username},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"5m"});  
         
          const refereshToken = jwt.sign({id:user._id,name:user.username},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
          
          user.refereshToken = refereshToken

          await user.save()

            res.status(200).json({msg:"success",accesstoken,refereshToken})
            
        } catch (error) {

            console.log('error',error);

            res.status(500).json({msg:"error",error})
            
            
        }


}




export const dashboardData = async (req,res)=>{



    //console.log(req)
    



}
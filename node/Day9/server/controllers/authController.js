import { authModel } from "../models/authModel.js"
import bcrypt from 'bcrypt'


export const registerData = async(req,res)=>{

try {

    const {name,email,password} =  req.body

    if(!name || !email || !password) {
        res.status(404).json({msg:"Please Fill the Feild"})
        return
    }


    const checkemail = await authModel.findOne({email})

    //console.log(checkemail);

    if(checkemail) {
        return res.status(409).json({msg:"Already Email id is there"})
    }
    



    const changePassword = await bcrypt.hash(password,10)

    const register = await authModel.create({name,email,password:changePassword})

    res.status(201).json({msg:"Successfylly done"})
    
} catch (error) {

    console.log(error);
    
    
}
   


}






export const loginData = async(req,res)=>{

 

    try {

        const {email,password} =  req.body

    if(!email || !password) {
        res.status(404).json({msg:"Please Fill the Feild"})
        return
    }


    const checkemail = await authModel.findOne({email})

    if(!checkemail) {

        res.status(401).json({msg:"Not the valid Email"})
        return
    }


    const checkpassword = await bcrypt.compare(password,checkemail.password)

    // console.log(checkpassword);
    // return

    if(!checkpassword) {
         
        res.status(401).json({msg:"Not the valid Password"})
        return
         
    }

    res.status(200).json({msg:"success",name:checkemail.name})
        
    } catch (error) {

        console.log(error);
        
        
    }


}
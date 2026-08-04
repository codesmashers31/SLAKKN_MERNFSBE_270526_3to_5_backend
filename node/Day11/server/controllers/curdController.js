import curdModel from '../models/curdModel.js'

export const addingData = async (req,res)=>{
    try {

    const {username,useremail,userage} = req.body
     
    
            
     if(!username || !useremail || !userage){

        return res.status(409).json({msg:"Please Fill the Form"})

    }


    const checkEMail = await curdModel.findOne({useremail})

    if(checkEMail){

 return res.status(409).json({msg:"Already Excites"})
    }


   const create = await curdModel.create({username,useremail,userage})

   res.status(201).json({msg:"Successfully Done"})


    } catch (error) {

        console.log('Error',error);
        res.status(500).json({msg:error.message})
        
        
    }
}



export const gettingData = async (_,res)=>{


    try {

        const getting = await curdModel.find()
        res.status(200).json({yendata:getting})
        
    } catch (error) {
        
        res.status(500).json({ennodaerrordata:"Something error backend la problem",error})
    }

}






export const updatingData = async (req,res)=>{
    try {
        const {userid} = req.params
        const {username,useremail,userage} = req.body

         if(!username || !useremail || !userage){

        return res.status(409).json({msg:"Please Fill the Form"})
         }

//         const checkEMail = await curdModel.findOne({useremail})

//     if(checkEMail){

//  return res.status(409).json({msg:"Already Excites"})
//     }

    const update = await curdModel.findByIdAndUpdate(userid,{username,useremail,userage},{
        returnDocument:true,
        runValidators:true
    })


    res.status(200).json({msg:"Data Updated Successfully"})
    

    } catch (error) {

        console.log('Error',error);
        res.status(500).json({msg:error.message})
        
        
    }
}



export const deletesData = async(req,res)=>{


 
    try {
     
     const {userid} = req.params

     const deletsdatas = await curdModel.findByIdAndDelete(userid)

     res.status(200).json({msg:"Successfully deleted"})

        
    } catch (error) {

        
        console.log('Error',error);
        res.status(500).json({msg:error.message})
        
    }

}
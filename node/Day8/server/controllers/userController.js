import userModel from "../models/userModel.js"

export const addingData = async(req,res)=>{

try {

    const {name,email,age} = req.body

    const adding = await userModel.create({name,email,age});

    res.status(201).json({msg:"Added Successfully",adding})
    
} catch (error) {

    console.log('error',error.message);
    res.status(500).json({msg:"Error Something on backend",error})
    
    
}



}


export const getDatas = async (req,res)=>{
    try {

        const get = await userModel.find()

        res.status(200).json({get})
        
    } catch (error) {

    console.log('error',error.message);
    res.status(500).json({msg:"Error Something on backend",error})
    
    
}
}

export const singleDatas = async(req,res)=>{

    try {
         
        
      //console.log(req.params.id);
      
        if(req.params.id){
            return res.status(404).json({msg:"invalid Id"})
        }
        
        //const {id} = req.params.id
        const single = await userModel.findById(req.params.id)

        res.status(200).json({single})
        
    } catch (error) {

    console.log('error',error.message);
    res.status(500).json({msg:"Error Something on backend",error})
    
    
}


}






export const deleteDatas = async(req,res)=>{

      try {
            
     const {id} = req.params
      
     const deletedata = await userModel.findByIdAndDelete(id)

     res.status(200).json({msg:"Successfully deleted"})

      } catch (error) {

          console.log('error',error.message);
    res.status(500).json({msg:"Error Something on backend",error})
        
      }



}




export const updateData = async(req,res)=>{

try {

    const {name,email,age} = req.body
    const {id} = req.params

    const update = await userModel.findByIdAndUpdate(id,{name,email,age},{returnDocument: 'after'});

    res.status(200).json({msg:"updated Successfully",update})
    
} catch (error) {

    console.log('error',error.message);
    res.status(500).json({msg:"Error Something on backend",error})
    
    
}



}
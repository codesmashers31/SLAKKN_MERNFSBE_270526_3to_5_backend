export const getData = (req,res)=>{

    //console.log(req);
    

 try {

       const {email} = req.body

    if(name==="react"){
        res.status(200).json({msg:"Successfully done"})

    }else{
        res.status(404).json({msg:"Not come"})
    }
    
 } catch (error) {

    console.log('error',error.message);
    res.status(500).json({msg1:error.message})
     
    
 }
    

}

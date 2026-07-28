let arr = []

export const  register = async (req,res)=>{


try {


    //console.log(req);

    

    arr.push(req.body)

    console.log(arr);


   const datas = arr.filter((e)=>e.name==="react")

   console.log(datas);
   
        return res.status(200).json({datas})
  
    
    

    
} catch (error) {

    console.log(error);
    
    
}




}

const arr = [1,2,3,4,5]

export const createBodyData = async(req,res)=>{


    console.log(req.body);
    

}


export const paramsData = async(req,res)=>{


   console.log(req.params);
   



}


export const queryParams = async(req,res)=>{


    console.log(req.query);
    

}


export const headersindo = async (req,res)=>{


    console.log(req.headers);
    console.log(req.body)
    


} 


export const getDatas = async(_,res)=>{


    
    //res.send("This is Text")
    //res.json({msg:"Text data",myarr:arr})
    
    //res.status(200).json({msg:"Text data",myarr:arr})
    // res.sendStatus(500)
    // res.download("downlaod.pdf")




}
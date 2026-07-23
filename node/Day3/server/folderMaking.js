import fs from 'fs'


const foldersMaking = ()=>{

     fs.mkdir("./home/images/logo/new",{recursive:true},(err)=>{
        if(err){
          return  console.log(err);
            
        }
        console.log('Successfully Folder Creted');
        
     })


}


// foldersMaking()



const readdir = ()=>{


  fs.readdir("./",(err,file)=>{
    console.log(file);
    
  })

}

// readdir()


const deleteFolder = ()=>{

   fs.rm("./home",{recursive:true,force:true},(e)=>{

    if(e){
        return console.log(e);
        
    }
    console.log('Succfully Deleted');
    
   })

}

deleteFolder()
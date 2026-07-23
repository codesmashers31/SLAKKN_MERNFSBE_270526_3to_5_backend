import fs from 'fs'

export const fileSystem = ()=>{


fs.writeFile("data.txt","I am the React & Node FIle System",(error)=>{

if(error){
    console.log(error);
    
}  else {
    console.log("File Created Successfully");
    
}



})



}




export const readFile_System = ()=>{

   
    fs.readFile("data.txt","utf-8",(error,data)=>{


        if(error){
            console.log(error);
            
        }else{
            console.log(data);
            
        }

    })



}


export const addData = ()=>{


    fs.appendFile("data.txt","\nWelcome to React",(error)=>{
           if(error){
            console.log(error);
            
           }else{
            console.log('Succfully Updated');
            
           }
    })

}



export const reName = ()=>{

     fs.rename("data.txt","simple.txt",(error)=>{
           if(error){
            console.log(error);
            
           }else{
            console.log('Succfully Renamed');
            
           }
    })

}


export const removeFiles = ()=>{


    fs.unlink("simple.txt",()=>{
        console.log('Successfully delete');
        
    })
   

}
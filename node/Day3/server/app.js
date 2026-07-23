import path from 'path'
import fs from 'fs'


const realpath = path.resolve()

// Step 1:
const folderPath = path.join(realpath,"public","home")

console.log(folderPath);


// step 2:



// fs.mkdir(folderPath,{recursive:true},(e)=>{

//  if(e){
    
//     console.log(e);
//     return
    
//  }else{
//     console.log('Succfully file Created Done');
    
//  }

// //  step 3 :

// const filePath = path.join(folderPath,"data.txt")

// // step 4:

// fs.writeFile(filePath,"welcome to React & Node",(e)=>{

//    if(e){
//     console.log(e);
//      return
//    }else{
//     console.log('successfully file Created');
    
//    }

// })


// setTimeout(()=>{
//     fs.appendFile(filePath,"\nAdd new datas",()=>{
//     console.log('added fully');
    
// })

// setTimeout(()=>{
// fs.readFile(filePath,"utf-8",(e,d)=>{

//     console.log(d);
    

// })
// },3000)

// },2000)





// })




import dotenv from 'dotenv'

import http from 'http'

import os from 'os'
import path from 'path'

dotenv.config()


const app = http.createServer()

const PORT = process.env.PORT || 3000


// console.log(PORT);

console.log(os.hostname());
console.log(os.platform());
//console.log(os.cpus());



// path

// console.log(path);

const filePath = path.join("assets","images","logo")

console.log(filePath);


console.log(path.basename("./public/assets/image/logo.png"));

const fileTake = path.resolve()


console.log(fileTake);



app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
    
})


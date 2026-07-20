import http from 'http'
import fs from 'fs'


console.log(fs);

const app = http.createServer()
const PORT = 5001
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
    
})



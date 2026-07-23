import http from 'http'
import dotenv from 'dotenv'
import { addData, fileSystem, readFile_System, removeFiles, reName } from './filesystem.js'

dotenv.config()


const PORT = process.env.PORT || 3000

const app = http.createServer()

// addData()
// fileSystem()

// readFile_System()

// reName()




// removeFiles()


app.listen(PORT,()=>{
    console.log(`server runnng on http://localhost:${PORT}`);  
})

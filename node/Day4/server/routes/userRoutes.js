import express from 'express'
import { getData } from './controllers/authControllers.js'


const routes = express.Router()

// http://localhost:5000/api/users/register - Resgiter api is this - Req datas: name:"",email:""

routes.post("/register",getData)


export default routes
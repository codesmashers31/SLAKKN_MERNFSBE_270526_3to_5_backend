import express from 'express'
import { addingData,getDatas,singleDatas,deleteDatas, updateData } from '../controllers/userController.js'

// http://localhost:5000/api/users/register
// http://localhost:5000/api/users/usersdata
// http://localhost:5000/api/users/singleData
// http://localhost:5000/api/users/deleteData
// http://localhost:5000/api/users/updateData
const routes = express.Router()

routes.post("/register",addingData)
routes.get("/usersdata",getDatas)
routes.get("/singleData/:id",singleDatas)
routes.delete("/deleteData/:id",deleteDatas)
routes.put("/updateData/:id",updateData)
export default routes
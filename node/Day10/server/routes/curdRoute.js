import express from 'express'
import { addingData,gettingData } from '../controllers/curdController.js'

// user Addding page- // http://localhost:5000/api/curd/adding -  post - {

// username:String,
// useremail:String,
// userage:Number
 

// }


// http://localhost:5000/api/curd/getting - get all data from the database collection
const routes = express.Router()

routes.post("/adding",addingData)
routes.get("/getting",gettingData)

export default routes
import express from 'express'
import { addingData,gettingData,updatingData,deletesData } from '../controllers/curdController.js'

// user Addding page- // http://localhost:5000/api/curd/adding -  post - {

// username:String,
// useremail:String,
// userage:Number
 

// }


// http://localhost:5000/api/curd/getting - get all data from the database collection

// http://localhost:5000/api/curd/updating

// http://localhost:5000/api/curd/updating
const routes = express.Router()

routes.post("/adding",addingData)
routes.get("/getting",gettingData)
routes.put("/updating/:userid",updatingData)
routes.delete("/delete/:userid",deletesData)
export default routes
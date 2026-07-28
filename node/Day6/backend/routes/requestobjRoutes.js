import express from 'express'
import { createBodyData, getDatas, headersindo, paramsData, queryParams } from '../controllers/requestobjController.js'


// http://localhost:5000/api/requestobj/requestbody
// http://localhost:5000/api/requestobj/routeparamsdata/12345689
// http://localhost:5000/api/requestobj/queryparamsdata?userid=123&completed=2&2bhk=2&rent=2&sort=asc
// http://localhost:5000/api/requestobj/headersdata
// http://localhost:5000/api/requestobj/getDatasall

const requestRoutes = express.Router()



requestRoutes.post("/requestbody",createBodyData)
requestRoutes.get("/routeparamsdata/:userid",paramsData)
requestRoutes.get("/queryparamsdata",queryParams)
requestRoutes.post("/headersdata",headersindo)
requestRoutes.get("/getDatasall",getDatas)
export default requestRoutes
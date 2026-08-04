import axios from 'axios'
const API = axios.create(
    {

        baseURL:import.meta.env.VITE_API_URL

    }
)


export const addData = (datas)=>{
    return API.post("/curd/adding",datas)
} 


export const getData = ()=>{
    return API.get("/curd/getting")
}

export const updateData = (userid,datas)=>{
    return API.put(`/curd/updating/${userid}`,datas)
}


export const deleteDatas = (userid)=>{
    return API.delete(`/curd/delete/${userid}`)
}
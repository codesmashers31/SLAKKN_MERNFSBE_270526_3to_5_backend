import axios from 'axios'

const API = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})



export const registerData = (datas)=>{


   return API.post("/auth/register",datas)

}

export const loginData = (datas)=>{


   return API.post("/auth/login",datas)

}
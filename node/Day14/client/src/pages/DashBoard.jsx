import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DashBoard = () => {

    const [datas,setDatas] = useState({})

   
    const getDatas = async ()=>{
        try {

            const token = await localStorage.getItem("token")

            const get = await axios.get("http://localhost:5000/api/auth/dashboard",{
                headers:{Authorization:`Bearer ${token}`}
            })
            //console.log('get',get);

            setDatas(get.data.msg)
            
        } catch (error) {

            alert(error.response.data.msg)
            localStorage.removeItem("token")
            
        }
    }


    useEffect(()=>{
        getDatas()
    },[])

  return (
    <>
    <div className='bg-blue-50 text-black p-10'>
     dashboard
     <h1 className='mb-6'>Welcome  {datas.name}</h1>
     <p>user id {datas.id}</p>
    </div>
    </>
  )
}

export default DashBoard
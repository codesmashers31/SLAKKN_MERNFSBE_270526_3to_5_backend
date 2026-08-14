import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

  const [fromdatas,setFromDatas] = useState({useremail:"",userpassword:""})


  const handleChange = (e)=>{

    setFromDatas({...fromdatas,[e.target.name]:e.target.value})

  }


  const handleSubmit = async (e)=>{
   
    e.preventDefault()

    try {

       const res = await axios.post("http://localhost:5000/api/auth/login",fromdatas) 

       const token = res.data.refereshToken;

       localStorage.setItem("token",token)
       
       alert(res.data.msg)
       setFromDatas({useremail:"",userpassword:""})
       
       navigate("/dashboard")
    

        
    } catch (error) {

        alert(error.response.data.msg)
        
    }




  }


  return (
   <>
   <div className='bg-gray-200 p-10 flex justify-center items-center'>
    <form onSubmit={handleSubmit} className='bg-white p-10 w-80 flex flex-col justify-center items-start'>
        <input className='border p-2 w-60 rounded mb-4' type="text" name="useremail" value={fromdatas.useremail} placeholder='enter the email' onChange={handleChange}  />
        <input className='border p-2 w-60 rounded mb-4' type="text" name="userpassword" value={fromdatas.userpassword} placeholder='enter the password' onChange={handleChange}  />
        <input type="submit" className='bg-black text-white p-1 w-30 rounded border-none' value="Login" />
    </form>
   </div>
   </>
  )
}

export default Login
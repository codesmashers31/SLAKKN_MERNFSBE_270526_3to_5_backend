import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {

  const navigate = useNavigate()
 const [userData,setUserData] = useState({})

 const myData = JSON.parse(localStorage.getItem("auth"))
 
if(!userData.userName){
    navigate("/login")
   }

 useEffect(()=>{

   const datas = ()=>{
   
   setUserData(myData)

   

 }

 datas()

 },[])

 const logout = ()=>{
  
  localStorage.removeItem("auth")
  
 navigate("/login")

  }

   
  return (
    <div>
      DashBoard

      <h2>{userData.userName}</h2>
      <p>{userData.userEmail}</p>
       <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashBoard

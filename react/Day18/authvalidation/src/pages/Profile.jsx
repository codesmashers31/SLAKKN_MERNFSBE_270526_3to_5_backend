import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Profile = () => {

     const {user} = useContext(AuthContext)

     if(user===null){
         alert("User NOT a Valid user Please Login")
     }
  return (
   <>
   <div>
    {user?.userName}
   </div>
   </>
  )
}

export default Profile
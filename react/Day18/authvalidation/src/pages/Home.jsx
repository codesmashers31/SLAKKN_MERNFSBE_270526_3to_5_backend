import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
  
    const {user,logout} = useContext(AuthContext)

   console.log(user);
   


  return (

  <>
    <div>
        <h1>Welcome !!! {user?.userName}</h1>
        <p>{user?.userEmail}</p>
    </div>
    <button onClick={logout}>Logout</button>
</>
    
    
  )
}

export default Home
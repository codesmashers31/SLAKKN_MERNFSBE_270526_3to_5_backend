import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
     
   <>
    <div className='bg-blue-500 text-white p-2 flex justify-between items-center'>
        <div className='mx-30'>
            Logo
        </div>
        <div className='mx-30 flex gap-30'>
            <Link to={"/"}>Login</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </div>
    </div>
   </>


  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div style={{backgroundColor:"black",padding:"15px",color:"white",marginBottom:"10px"}}>
        <Link style={{color:"white",textDecoration:"none",marginLeft:"10px"}} to={"/"}>Register</Link> |||  
        <Link style={{color:"white",textDecoration:"none",marginLeft:"10px"}} to={"/login"}>Login</Link>
     </div>
    </>
  )
}

export default Navbar
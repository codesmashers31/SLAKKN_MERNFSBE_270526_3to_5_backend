import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <Link to={"/"}>Home</Link>
    <Link to={"/task"}>Task</Link>
    <Link>Tast</Link>
    <Link >Project</Link>
   </>
  )
}

export default Navbar

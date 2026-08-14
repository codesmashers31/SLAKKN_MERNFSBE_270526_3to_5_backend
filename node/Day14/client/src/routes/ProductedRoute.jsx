import React from 'react'
import { Navigate } from 'react-router-dom'

const ProductedRoute = ({children}) => {

  const token = localStorage.getItem("token")

  if(!token) {

    alert("Your Not a Valid user")
    return <Navigate to={"/"}/> 
  }

  return children

}

export default ProductedRoute
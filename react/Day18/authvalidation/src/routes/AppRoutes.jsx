import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Regsiter'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import ProductedRouters from './ProductedRouters'




const AppRoutes = () => {
  return (
   <>
   <Routes>
    
    <Route path='/' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/home' element={<ProductedRouters><Home/></ProductedRouters>} />
    <Route path='/profile' element={<ProductedRouters><Profile/></ProductedRouters>} />

   </Routes>
   </>
  )
}

export default AppRoutes

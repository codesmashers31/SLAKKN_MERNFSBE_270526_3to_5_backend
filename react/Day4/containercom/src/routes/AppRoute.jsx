import { Route, Routes } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../components/Home"

import Login from "../components/Login"
import ProductDatas from "../logics/ProductDatas"


const AppRoute = () => {
  return (

    <>
    <Routes>
        <Route element={<Layout/>}>
         <Route path="/" element={<Home/>} />
         <Route path="/products" element={<ProductDatas/>} />

        </Route>

        <Route path="/login" element={<Login/>} />
        
    </Routes>
    </>
  
  ) 
}

export default AppRoute
import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Home from "../pages/Home"
import StringMethods from "../pages/StringMethods"
import NumbersRendering from "../pages/NumbersRendering"
import TerNaryOp from "../pages/TerNaryOp"
import OptionalRendering from "../pages/OptionalRendering"
import Nullish from "../pages/Nullish"
import Object from "../pages/Object"
import ArrayRendering from "../pages/ArrayRendering"
import ArrayOfObj from "../pages/ArrayOfObj"


const AppRoutes = () => {
  return (
   <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/string" element={<StringMethods/>}  />
      <Route path="/number" element={<NumbersRendering/>}  />
      <Route path="/tarnary" element={<TerNaryOp/>}  />
      <Route path="/optional" element={<OptionalRendering/>}  />
      <Route path="/nullish" element={<Nullish/>}  />
      <Route path="/object" element={<Object/>}  />
      <Route path="/array" element={<ArrayRendering/>}  />
      <Route path="/arrobj" element={<ArrayOfObj/>}  />
    </Routes>
   
   </>
    
    
    
  )
}

export default AppRoutes
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import ArrayRendering from "../pages/ArrayRendering"
import ArrayOfObj from "../pages/ArrayOfObj"
import Object from "../pages/Object"


const AppRoute = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/object" element={<Object/>}  />
      <Route path="/array" element={<ArrayRendering/>}  />
      <Route path="/arrobj" element={<ArrayOfObj/>}  />
    </Routes>
    </>
  )
}

export default AppRoute
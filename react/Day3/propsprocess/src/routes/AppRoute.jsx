import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../components/About"
import Navbar from "../components/Navbar"


const AppRoute = () => {
  return (
   <>
    <Navbar/>
     <Routes >
        <Route path="/" element = {<Home/>}/>
        <Route path="assinmentone" element={<About/>} />
     </Routes>
   </>
  )
}

export default AppRoute

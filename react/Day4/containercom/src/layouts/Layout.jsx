import { Outlet } from "react-router-dom"
import Navbra from "../components/Navbra"


const Layout = () => {
  return (
    <>
    <Navbra/>
    <div>Layout</div>
    <Outlet/>
    </>
  )
}

export default Layout
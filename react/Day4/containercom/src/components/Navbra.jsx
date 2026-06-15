import { Link } from "react-router-dom"


const Navbra = () => {
  return (
    <>
    <Link to={"/"}>Home</Link>
    <Link to={"/login"}>Login</Link>
    <Link to={"/products"}>Products</Link>
    </>
  )
}

export default Navbra
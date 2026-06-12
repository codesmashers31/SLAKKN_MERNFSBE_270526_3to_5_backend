import { Link, NavLink, useNavigate } from "react-router-dom"


const NavBar = () => {

  const navigate = useNavigate()

  const handleclick = ()=>{

    navigate("/login")

  }
  return (
    <>
    <div className="bg-blue-700 text-white p-3 flex justify-between items-center">
      <div className="mx-10">Logo</div>
      <div className="mx-10 flex gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <NavLink className={({isActive})=>isActive && "bg-amber-200 text-black p-1 text-center w-25 rounded"} to={"/contact"}>Contect</NavLink>
        {/* ({isActive})=>{} */}
        {/* classname = {(isActive)=>isActive && "Tailwindcss"} */}
        <Link to={"/service"}>Services</Link>
        <button className="bg-white p-1 rounded text-black w-25" onClick={handleclick}>Login</button>
      </div>
    </div>
    </>
  )
}

export default NavBar
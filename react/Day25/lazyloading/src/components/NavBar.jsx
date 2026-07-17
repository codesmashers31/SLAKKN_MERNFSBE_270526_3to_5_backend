
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div style={{display:"flex",gap:"15px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
    </div>
    </>
  )
}

export default NavBar
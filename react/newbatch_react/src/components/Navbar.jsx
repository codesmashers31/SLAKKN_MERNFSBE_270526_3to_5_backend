import { Link } from "react-router-dom"

const Navbar = ()=>{

    return (<>
    
    <div className="bg-green-400 p-2 flex justify-between items-center">
     <Logo />
     <Links/>
    </div>
    
    </>)

}


export default Navbar





const Logo = ()=>{

    return (<>
    
    <div className="w-20 mx-10">
        <img src="./logo.png" alt="" />
    </div>
    
    </>)

}


const Links = ()=>{

    return (<>
    
       <div className="flex mx-10 gap-10 text-white">
        <Link className="bg-black p-1 w-15 text-center rounded">Home</Link>
        <Link className="bg-black p-1 w-20 text-center rounded">My Skills</Link>
        <Link className="bg-black p-1 w-20 text-center rounded">Task</Link>
        <Link className="bg-black p-1 w-20 text-center rounded">Projects</Link>
        <Link className="bg-black p-1 w-20 text-center rounded">About Me</Link>
        <Link className="bg-black p-1 w-25 text-center rounded">Contact Me</Link>
       </div>

    </>)

}
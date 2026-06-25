import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

  const [registerData,setRegisterData] = useState({userEmail:"",userPassword:""})
  const [dataBase,setDataBase] = useState([])
  const handleChange = (e)=>{

     setRegisterData({...registerData,[e.target.name]:e.target.value})

  }
 
  const handleSubmit = (e)=>{

    e.preventDefault()

    if(registerData.userEmail === "" || registerData.userPassword===""){
        alert("Fill the Empty input")
        return
    } 
  
     
    const myData = JSON.parse(localStorage.getItem("userData"))

   const checkauth =  myData.find((e)=>e.userEmail === registerData.userEmail && e.userPassword === registerData.userPassword)

   if(!checkauth){
    alert('User Not a register Users')
    return
   }

    

    // setDataBase(myData)

    localStorage.setItem("auth",JSON.stringify(checkauth))
   
    // alert('Succfully Added')

    setRegisterData({userEmail:"",userPassword:""})
     
    navigate("/dashboard")

  }

  return (
  <>
    <div>
      <h2>
        Register
      </h2>
    </div>
   
   <div>
    <form onSubmit={handleSubmit}>
      
      
      <input type="text" name="userEmail" onChange={handleChange} value={registerData.userEmail} placeholder='User Email' />
      <input type="password" name="userPassword" onChange={handleChange} value={registerData.userPassword} placeholder='User Password' />
      <input type="submit" value={"Login"} />
    </form>
   </div>

  </>
  )
}

export default Login

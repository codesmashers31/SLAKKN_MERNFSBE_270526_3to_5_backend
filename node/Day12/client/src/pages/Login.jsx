import { useState } from "react"
import { loginData, registerData } from "../apis/axios"
import { useNavigate } from "react-router-dom"


const Login = () => {

const navigate = useNavigate()
const [takeData,settakeData] = useState({useremail:"",userpassword:""})

 const handleChange = (e)=>{

settakeData({...takeData,[e.target.name]:e.target.value})

 }


const handleSubmit = async(e) =>{

    try {

        
  e.preventDefault()
 
  const datas = await loginData(takeData)

  //console.log(datas.data.token);

  localStorage.setItem("jwttoken",JSON.stringify(datas.data.token))
  

  alert(datas.data.msg)

  settakeData({useremail:"",userpassword:""})

  navigate("/dashboard", {state:datas.data.users})
        
    } catch (error) {

        alert(error.response.data.msg)
        
    }


}

  return (
    <>
    <form onSubmit={handleSubmit}>
        
        <input type="text" value={takeData.useremail}  name="useremail" placeholder="Enter the Email" onChange={handleChange} />
        <input type="text" value={takeData.userpassword}  name="userpassword" placeholder="Enter the Password" onChange={handleChange} />
        <input type="submit" value="Login" />
    </form>
    </>
  )
}

export default Login
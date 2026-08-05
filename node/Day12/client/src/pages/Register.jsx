import { useState } from "react"
import { registerData } from "../apis/axios"
import { useNavigate } from "react-router-dom"


const Register = () => {

const navigate = useNavigate()
const [takeData,settakeData] = useState({username:"",useremail:"",userpassword:""})

 const handleChange = (e)=>{

settakeData({...takeData,[e.target.name]:e.target.value})

 }


const handleSubmit = async(e) =>{

  e.preventDefault()
 
 try{

     const datas = await registerData(takeData)

  alert(datas.data.msg)

  settakeData({username:"",useremail:"",userpassword:""})

  navigate("/login")

 }catch(e){

    alert(e.response.data.msg)

 }


}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={takeData.username} name="username" placeholder="Enter the Name" onChange={handleChange} />
        <input type="text" value={takeData.useremail}  name="useremail" placeholder="Enter the Email" onChange={handleChange} />
        <input type="text" value={takeData.userpassword}  name="userpassword" placeholder="Enter the Password" onChange={handleChange} />
        <input type="submit" value="Register" />
    </form>
    </>
  )
}

export default Register
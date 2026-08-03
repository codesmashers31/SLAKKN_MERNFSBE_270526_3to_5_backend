import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const App = () => {

 const [formData,setFromData] = useState({username:"",useremail:"",userage:""})
 const [getdatas,setgetDatas] = useState([]) 
 const [editid,setEditID] = useState(null)

 const getingData = async ()=>{


  try {

    const getting = await axios.get("http://localhost:5000/api/curd/getting")

    console.log(getting);
    setgetDatas(getting.data.yendata)
    
    
  } catch (error) {

    alert(error.response.data.ennodaerrordata);
    
    
  }

 }

 useEffect(()=>{

    getingData() 


 },[])



 const handleChange = (e)=>{
    
  setFromData({...formData,[e.target.name]:e.target.value})
   
 }

const handleAdding = async (e)=>{

  e.preventDefault()

  try {

    const input = await axios.post("http://localhost:5000/api/curd/adding",formData)

    // console.log('res',res);

    alert(input.data.msg)
    setFromData({username:"",useremail:"",userage:""})
    getingData() 
    
  } catch (error) {

    console.log('error.data', error);
    alert(error.response.data.msg)
    
    
  }

}


const EditData = (users)=>{
   

  setFromData({username:users.username,useremail:users.useremail,userage:users.userage})
  setEditID(users._id)

}

  return (
    <>
    <form>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="useremail" value={formData.useremail} onChange={handleChange} />
      <input type="number" name="userage" value={formData.userage} onChange={handleChange} />
      {editid?<button>Update</button>:<button onClick={handleAdding}>Adding</button>}
      
    </form>



<div>

  <input type="text" onChange={handlerech} />
  
  {getdatas.map((e)=>(

    <div key={e._id}>
      <h1>Name:{e.username}</h1>
      <p>Email:{e.useremail}</p>
      <p>Age:{e.userage}</p>
      <button onClick={()=>EditData(e)}>Edit</button>
    </div>


  ))}


</div>
    </>
  )
}

export default App
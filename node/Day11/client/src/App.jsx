import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import { addData, deleteDatas, getData, updateData } from "./api/axios"


// const baseURL = import.meta.env.VITE_API_URL


const App = () => {

 const [formData,setFromData] = useState({username:"",useremail:"",userage:""})
 const [getdatas,setgetDatas] = useState([]) 
 const [editid,setEditID] = useState(null)

 const getingData = async ()=>{


  try {

    const getting = await axios.get(`${import.meta.env.VITE_API_URL}/curd/getting`)

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

    const input = await addData(formData)

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


const handleupdate = async(e)=>{

  try {

    e.preventDefault()

      const update = await updateData(editid,formData)

      console.log(update);

      alert(update.data.msg)
      setFromData({username:"",useremail:"",userage:""})
      setEditID(null)
      getingData() 
    

    
  } catch (error) {
     
     console.log('error.data', error);
    alert(error.response.data.msg)
    

    
  }
      

}


const deleteData = async(userid)=>{

  try {

    const deletedatas = await deleteDatas(userid) 

    alert(deletedatas.data.msg)

     getingData() 
    
  } catch (error) {

    console.log('error.data', error);
    alert(error.response.data.msg)
    
  }

}

  return (
    <>
    <form>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="useremail" value={formData.useremail} onChange={handleChange} />
      <input type="number" name="userage" value={formData.userage} onChange={handleChange} />
      {editid?<button onClick={handleupdate}>Update</button>:<button onClick={handleAdding}>Adding</button>}
      
    </form>



<div>

  
  
  {getdatas.map((e)=>(

    <div key={e._id}>
      <h1>Name:{e.username}</h1>
      <p>Email:{e.useremail}</p>
      <p>Age:{e.userage}</p>
      <button onClick={()=>EditData(e)}>Edit</button>
      <button onClick={()=>deleteData(e._id)}>Delete</button>
    </div>


  ))}


</div>
    </>
  )
}

export default App
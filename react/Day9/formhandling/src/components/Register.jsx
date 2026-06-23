import { useState } from "react"
import Showing from "./Showing"


const Register = () => {

 const [userData,setUserData] = useState({userName:"",userAge:"",userCity:""})
 const [saveData,setSaveData] = useState([])
 const [editId,setEdit] = useState(null)
 
const handleChange = (e)=>{


    //console.log(e.target.name);
    
setUserData({...userData,[e.target.name]:e.target.value})



// console.log(userData);


}


const handleSubmit = (e)=>{

    e.preventDefault()

//   const datas = []

//   datas.push(userData)


if(userData.userName === "" || userData.userAge === "" || userData.userCity === ""){

  alert("Enter the Empty Values ")
  return
  
}


   setSaveData((prev)=>[...prev,userData]
   )

   console.log(saveData);

   setUserData({userName:"",userAge:"",userCity:""})
   

}

const handleEdit = (users,i)=>{

    //console.log(users);

    setUserData(users)
    setEdit(i)
    
    

  }

  const handleDelete = (userid)=>{

    //console.log(users);

    //alert(userid)
const remove = saveData.filter((_,i)=>i !== userid)
    
setSaveData(remove)


// setSaveData((p)=>p.filter((_,i)=>i !== userid)
    

  }

  const handleupdate = (e)=>{

    e.preventDefault()
     
    //console.log(editId);
    
     setSaveData((prev)=>prev.map((e,i)=>i===editId?{...userData, e}:e))
     

    setEdit(null)

   
     setUserData({userName:"",userAge:"",userCity:""})
   



  }

  return (
    <>
    <div className="h-100 p-5 bg-amber-100 flex justify-center items-center">
        <form >
            <div className="bg-white rounded p-2 w-100">
                <div className="bg-black text-white p-2 mb-4">
                    <h1>Register</h1>
                <p>Register Your Self if your New!!</p>
                </div>
             <table>
                <tbody>
                    <tr>
                    <td><label htmlFor="" className="mx-4">Enter the Name</label></td>
                    <td><input type="text" className="border-2 w-60 p-1" value={userData.userName} name="userName" onChange={handleChange} /></td>
                </tr>
                <br />
                 <tr>
                    <td><label htmlFor="" className="mx-4">Enter the Age</label></td>
                    <td><input type="text" className="border-2 w-60 p-1" value={userData.userAge} name="userAge" onChange={handleChange} /></td>
                </tr>
                <br />
                 <tr>
                    <td><label htmlFor="" className="mx-4">Enter the City</label></td>
                    <td><input type="text" className="border-2 w-60 p-1" value={userData.userCity} name="userCity" onChange={handleChange} /></td>
                </tr>
<br />
                <tr>
                    <td></td>
                    <td>
                        {editId!==null?<button className="bg-black rounded w-25 text-white text-center p-1" onClick={handleupdate}>Update</button>:<button className="bg-black rounded w-25 text-white text-center p-1" onClick={handleSubmit}>create</button>}
                     
                    </td>
                </tr>
                </tbody>
             </table>
            </div>
        </form>
    </div>

    <div>
        <Showing datas = {saveData} edit = {handleEdit} delete_data = {handleDelete}  />
    </div>
    </>
  )
}

export default Register
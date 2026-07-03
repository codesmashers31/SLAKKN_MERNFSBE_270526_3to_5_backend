// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// const App = () => {
// const [producsData,SetProductData] = useState([])
// const [search,setSerach] = useState("")
// const [catData,setCatData] = useState([])
// const [selectData,setSelectData] = useState("")
// const getFetch = async ()=>{
//   try {

//     const takeData = await fetch("https://dummyjson.com/products")
//     const paringData = await  takeData.json()
//     SetProductData(paringData.products)

//     const catData = paringData.products.map((e)=>e.category)
//     const dub = [...new Set(catData)]
    
//    setCatData(dub)


//   } catch (error) {
     
//     console.log('Error',error);
    
//   }
// }


// useEffect(()=>{
//  getFetch()
// },[])
 
// let products = [...producsData] 

// const handleChange = (e)=>{

// setSerach(e.target.value)

// }

// const handleSelect = (e)=>{

//   setSelectData(e.target.value)

// }

// if(search){
//   products = products.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
// }

// if(selectData){
//   products = products.filter((e)=>e.category===selectData)
// }

//   return (
//     <div>

//     <input type="text"  placeholder="Serach" onChange={handleChange} />
    
//     <select onChange={handleSelect}>
//       <option value="">All</option>
//       {
//       catData.map((e,i)=>(
//  <option value={e} key={i+1}>{e}</option>
//       ))
       
//       }
//     </select>
    
//       {products.map((e)=>(

//       <div key={e.id}>
//         <p>Title:{e.title}</p>
//         <p>Category:{e.category}</p>
//         <p>Price:{e.price}</p>
//       </div>


//       ))}
    
//     </div>
//   )
// }

// export default App





const App = () => {

  const [formData,setFormData] = useState({userName:"",userMobile:"",userEmail:""})
  const [saveData,setSaveData] = useState([])
  const [editId,setEditID] = useState(null)

  const [search,setSearch] = useState("")
  const handleChange = (e)=>{
  

    setFormData({...formData,[e.target.name]:e.target.value})
        

  }

const handleAdd = (e)=>{
  e.preventDefault()

  const userDatas = {id:Date.now(),...formData}

 const userLocal =  JSON.parse(localStorage.getItem("todolist")) || []


 userLocal.push(userDatas)

 localStorage.setItem("todolist",JSON.stringify(userLocal))



setFormData({userName:"",userMobile:"",userEmail:""})

alert('Succfully added')

getData()
}


const getData = ()=>{
   
 const userLocal =  JSON.parse(localStorage.getItem("todolist")) ||  []
  setSaveData(userLocal)
}
useEffect(()=>{
 getData()
},[])


const handleEdit = (userid)=>{

  const EditData = saveData.find((e)=>e.id===userid)

  //console.log(EditData);

  setFormData({
     
    userName:EditData.userName,
    userMobile :EditData.userMobile,
    userEmail: EditData.userEmail

  })

setEditID(userid)


  

}

const handleDelete = (userid)=>{

const getData = JSON.parse(localStorage.getItem("todolist"))
const deleteData = getData.filter((e)=>e.id !== userid)

  //console.log(deleteData);
  localStorage.setItem("todolist",JSON.stringify(deleteData))

  alert('Successfully Deleted')
  
  setSaveData(deleteData)
  getData()


}


const handleUpdate = (e)=>{
e.preventDefault()

const getData = JSON.parse(localStorage.getItem("todolist"))
const updateData = getData.map((e)=>e.id===editId?{...getData,...formData}:saveData)
localStorage.setItem("todolist",JSON.stringify(updateData))
setSaveData(updateData)
setEditID(null)
setFormData({userName:"",userMobile:"",userEmail:""})
}


let saveDataNew = [...saveData]

if(search){
    
   saveDataNew=saveDataNew.filter((e)=>e.userName.toLowerCase().includes(search.toLowerCase())) 

}
  return (
   <>
   <form>
    <input type="text" name="userName" placeholder="userName" value={formData.userName} onChange={handleChange} />
    <input type="text" name="userMobile" placeholder="Mobile" value={formData.userMobile} onChange={handleChange} />
    <input type="text" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
    {editId===null?<button onClick={handleAdd}>Add</button>:<button onClick={handleUpdate}>Update</button>}
    
    
   </form>


   <input type="text" onChange={(e)=>setSearch(e.target.value)} />

   <div>
    <table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {saveDataNew.map((e,i)=>(
          <tr key={e.id}>
          <td>{i+1}</td>
          <td>{e.userName}</td>
          <td>{e.userMobile}</td>
          <td>{e.userEmail}</td>
          <td><button onClick={()=>handleEdit(e.id)}>Edit</button> || <button onClick={()=>handleDelete(e.id)}>Delete</button></td>
        </tr>
          
        ))}
        
      </tbody>
    </table>
   </div>
   </>
  )
}

export default App

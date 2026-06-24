import React, { useEffect, useState } from 'react'

const App = () => {

  const [userData,setUserData] = useState({username:"",userage:"",useremail:""})
  const [saveData,setSaveData] = useState([])

  const handleChange = (e)=>{

    // const datas  = e.target.name

    const {name,value} = e.target

    //console.log(datas);
    

    setUserData({...userData,[name]:value})

    //console.log(userData);
    

  }

 const handleClick = (e)=>{

    e.preventDefault()

  
   const saveDataNew = JSON.parse(localStorage.getItem("userdatas")) || []
   
  console.log(saveDataNew);
  
   const checkemail = saveDataNew.find((e)=>e.useremail===userData.useremail)

   if(userData.userage < 18){
    alert('Not Eligiable')
    return
   }

   if(checkemail){
      alert('Email id already excites')
      return
   }

   saveDataNew.push(userData)


  localStorage.setItem("userdatas",JSON.stringify(saveDataNew))

   alert('Succfully Added')
    
   
   setUserData({username:"",userage:"",useremail:""})

 }



 const getDatas = ()=>{
    
  const datas = JSON.parse(localStorage.getItem("userdatas"))
  setSaveData(datas)
 

 }


 useEffect(()=>{
   getDatas()

 },[userData])

  return (
    <>
    App For Form Handling

    <div>
      <form>
        <input type="text" onChange={handleChange} value={userData.username} name="username" placeholder='Enter the Name' />
        <input type="text" onChange={handleChange} value={userData.userage} name="userage" placeholder='Enter the Age' />
        <input type="text" onChange={handleChange} value={userData.useremail} name="useremail" placeholder='Enter the Email' />
        <button onClick={handleClick}>Register</button>
      </form>
    </div>


    <div>
      {saveData.map((e,i)=>(

        <div key={i}>
        <p>{e.username}</p>
        <p>{e.userage}</p>
        <p>{e.useremail}</p>
      </div>

      ))}
      
    </div>
    </>
  )
}

export default App

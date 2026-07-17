// import { Route, Routes } from "react-router-dom"
// import NavBar from "./components/NavBar"
// import { lazy, Suspense } from "react"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Project from "./pages/Project"




// // import { lazy } from "react";

// // const Home = lazy(()=>import("./pages/Home"))


// const App = () => {
//   return (
//     <>
//       <div>
//         <h1>Lazy Loading & ENV</h1>
//         <NavBar/>
//       </div>

      
     
//       <Routes>
       
//         <Route path="/" element={<Home/>} />
//        <Route path="/about" element={<About/>} />
       
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/project" element={<Project/>} />
      
        
//       </Routes>
   
//     </>
//   )
// }

// export default App


import React from 'react'

const App = () => {
 
  const apiURL = import.meta.env.VITE_API_URL


 const getDatas = async ()=>{
  try{

    const getData = await fetch("apiURL")
    const res = await getData.json()
    
    console.log(res.products);
    


  }catch(error){
    
     console.log('error' ,error);
     
  }
 }

 getDatas()


  return (
    <h1>{apiURL}</h1>
  )
}

export default App
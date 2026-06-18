import { useState } from "react"
import course from '../assets/react.svg'
import Home from "./Home"

const Object = () => {

  const [obj,setObj] = useState({image:course,name:"React",year:2013,cat:"Node",plan:"Basic", course:{name:"React"}})
  
 const updateObj = ()=>{


  setObj({...obj,year:2014})



 }
  return (
    <>
     <div className="bg-green-500 p-10 h-100">
        <div className="flex justify-items-start gap-5 items-center">
          <h1 className="mb-5 text-center bg-white w-25 rounded p-2">Object</h1>
           <button className=" bg-white p-2 rounded mb-5" onClick={updateObj}>Click to Update</button>
        </div>
        <div className="bg-white p-10">
          <div className="bg-black p-3 text-white w-50 h-50 rounded-2xl">
            <img src={obj.image} alt="" />
              <h1>{obj.name}</h1>
              <p>{obj.year}</p>
              <p>{obj.cat}</p>
              <p className="mb-5">{obj.plan} <span className="bg-amber-300 text-black my-2 p-1 rounded ">{obj.course.name}</span></p>
               <button className="bg-white w-25 text-center rounded p-1 text-black">More</button>
          </div>
        </div>
    </div>

    <Home datas= {obj}  />
    </>
  )
}

export default Object
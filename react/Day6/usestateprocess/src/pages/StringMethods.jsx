import { useState } from "react"


const StringMethods = () => {

  const [userName,setUserName] = useState("React")

  const handleclick = ()=>{

    setUserName("Node")

  }

  return (
    <>
    <div className="bg-green-500 p-10 h-100 flex flex-col text-white gap-10 justify-center items-center">
        <h1>StringMethods </h1>
        <p>{userName}</p>
        <button className="bg-white p-1 rounded-2xl text-center text-black w-25" onClick={handleclick}>Read More</button>
    </div>
    </>
  )
}

export default StringMethods
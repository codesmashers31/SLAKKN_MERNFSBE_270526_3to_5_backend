import { useState } from "react"


const NumbersRendering = () => {

  const [count,setCount] = useState(0)

  const handleclick = ()=>{

    setCount(count+2)

  }

  return (
    <>
    <div className="bg-green-500 p-10 h-100 flex flex-col text-white gap-10 justify-center items-center">
        <h1>Numbers Rendering </h1>
        <p>{count}</p>
        <button className="bg-white p-1 rounded-2xl text-center text-black w-25" onClick={handleclick}>Read More</button>
    </div>
    </>
  )
}

export default NumbersRendering
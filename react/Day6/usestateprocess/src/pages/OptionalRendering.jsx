import { useState } from "react"


const OptionalRendering = () => {

  const [themechange,setThemeChange] = useState(false)

  const handleclick = ()=>{

     setThemeChange(!themechange)

  }

  return (
    <>
    <div className={themechange?"bg-green-500 p-10 h-100 flex flex-col text-white gap-10 justify-center items-center":"bg-black  p-10 h-100p-10 h-100 flex flex-col text-white gap-10 justify-center items-center"}    >
        
        {themechange && <h1>This is Route</h1>}
      
        <button className="bg-white p-1 rounded-2xl text-center text-black w-25" onClick={handleclick}>{themechange?"Green":"Black"}</button>
    </div>
    </>
  )
}

export default OptionalRendering
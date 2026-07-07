import { useContext } from "react"
import InputContext from "../context/InputContext"


const InputData = () => {

    const {inputRef,handleChange,showref,input} = useContext(InputContext)
   
    //console.log(input);
    
  const handleClick = ()=>{
     const newdata = input.current

     const datasewn = [newdata]
   console.log(datasewn);
  }
   
  return (
    <>
    <input type="text" ref={inputRef} onChange={handleChange} />
  
  <p ref={showref}></p>

  <button onClick={handleClick}>Click</button>
  

  {/* {datas.map((e,i)=>(
    <p key={i+1}>{e}</p>
  ))} */}

    </>
  )
}

export default InputData
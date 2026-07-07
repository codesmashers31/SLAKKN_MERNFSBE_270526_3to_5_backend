import {  useRef } from "react"
import InputContext from "../context/InputContext"


const InputProvider = ({children}) => {

 const inputRef = useRef("")

 const showref = useRef("")

 let input = useRef("")

 const handleChange = ()=>{

    const input_1 = inputRef.current.value

    showref.current.innerHTML = input_1

    input.current = input_1

 }




  return (

    <InputContext.Provider value={{inputRef,handleChange,showref,input}}>
       {children}
    </InputContext.Provider>
    
  )
}

export default InputProvider
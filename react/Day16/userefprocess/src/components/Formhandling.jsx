import { useRef, useState } from "react"


const Formhandling = () => {

    // const [showData,setShowData] = useState("")

const inputRef = useRef("")
const showingRef = useRef("")

 const handleChange = ()=>{

    //console.log(inputRef.current.value);
     
    const show = showingRef.current

    show.innerHTML = inputRef.current.value
    const input = inputRef.current.value
    if(input<18){
        show.innerText = "Not Eligiable"
        show.style.color = "red"
        return
    }
    show.style.color = "green"
 }



  return (
    <>
    <p ref={showingRef}></p>
    <input type="text" ref={inputRef} onChange={handleChange} />
    </>
  )
}

export default Formhandling
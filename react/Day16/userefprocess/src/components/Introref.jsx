import { useEffect, useRef } from "react"


const Introref = () => {


  const myref = useRef(null)
  
 console.log('Running');
 
  // useEffect(()=>{

  //   myref.current.innerHTML = "This is text"
  // },[])
  
  
  const handleClick = ()=>{
     console.log('Funtion Running');
  myref.current.style.color = "blue"    

  }

  return (
     <>
     <div >
       <h1 ref={myref}>Ref</h1>
       <button onClick={handleClick}>on CLick</button>
     </div>
     </>
  )
}

export default Introref
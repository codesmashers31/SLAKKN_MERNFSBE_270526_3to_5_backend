import React, { useRef } from 'react'

const SubmitShowing = () => {

  const inputRef = useRef("")
  const paraRef = useRef("")
   

  


   const handelClick = ()=>{
      const datas = inputRef.current.value
       paraRef.current.innerText = datas

   }
  return (
    <>
    <input type="text" ref={inputRef}  />
    <button onClick={handelClick}>showing</button>
    <p ref={paraRef}></p>
    </>
  )
}

export default SubmitShowing
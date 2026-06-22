import { useState } from "react";


const InputBox = ({text,taketheValue,valuedata,clickdata}) => {


//console.log(valuedata);


  return (
  <>
  <div>
    <input type="text" placeholder={text} onChange={taketheValue} />
  </div>

  
  <div>
    {valuedata??[].map((e,i)=>(
        <p key={i}>{e}</p>
    ))}
  </div>


  <div style={{backgroundColor:valuedata,color:"white",padding:"10px",width:"150px",height:"150px"}}>
      <p>Box</p>
  </div>
  
   <button onClick={clickdata}>click To i</button>
  </>
  )
}

export default InputBox

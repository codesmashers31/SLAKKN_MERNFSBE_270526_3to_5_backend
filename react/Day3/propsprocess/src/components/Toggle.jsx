import FunctionProps from "./FunctionProps"


const Toggle = ({booleanValue}) => {

  const changeColor = ()=>{

        alert("This colro Is change")

  }

  return (
     <>
     {booleanValue?"This is true":"This is False"}
      
      <FunctionProps  dataFunction = {changeColor}  />

     </>
  )
}

export default Toggle

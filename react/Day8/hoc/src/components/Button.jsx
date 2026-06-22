

const Button = ({title,count,onclick}) => {

    
  return (
   
  

    <>
    <button style={{backgroundColor:"blue",color:"white",padding:"10px",width:"300px"}} onClick={onclick}>{title}- {count}</button>
    </>
  )
}

export default Button

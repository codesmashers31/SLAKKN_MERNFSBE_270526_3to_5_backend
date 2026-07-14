import { useCallback, useState } from "react"
import Child from "./components/Child";




const App = () => {
  console.log('Compoent Running');

  const [count,setCout] = useState(0)

  const [theme,setTheme] = useState(false)
  

 
 

const handleClick = ()=>{
  
    


    console.log('Component callback running');
    setTheme(!theme)

    
 }

 //console.log('handelThemeChange',handelThemeChange);
 

 const handelThemeChange = useCallback(()=>{
  console.log('Count Process');
  
  setCout(count+1)
 },[count])

 //console.log('handleClick',handleClick);


  return (
   <>
   <h1>{count}</h1>
   <p>{theme?"Running":"Not Running"}</p>
   <button onClick={handleClick}>
   Click To update
   </button>
   <Child handleclick = {handelThemeChange} />
   
   </>
  )
}

export default App
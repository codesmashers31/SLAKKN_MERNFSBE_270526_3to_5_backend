import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const Cards = () => {
 const {theme} = useContext(ThemeContext)
     const dark = {
    
     backgroundColor:"black",
     color:"white"

 }

  const light = {
    
     backgroundColor:"white",
     color:"black"

 }
   
  return (
    <div style={theme?dark:light}>Cards</div>
  )
}

export default Cards
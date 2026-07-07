import { useContext } from "react"
import ThemeContext from "./context/ThemeContext"
import Cards from "./components/Cards"
import InputData from "./components/InputData"


const App = () => {

 const {theme,themeChange} = useContext(ThemeContext)

 const dark = {
    
     backgroundColor:"black",
     color:"white"

 }

  const light = {
    
     backgroundColor:"white",
     color:"black"

 }

  return (
    <>
      <div>
        <div style={theme?dark:light}>
         <h1>Theme</h1>
        </div>
        <div>
          <button onClick={themeChange}>Click To Change</button>
        </div>

        <Cards/>

        <InputData/>
      </div>
    </>
  )
}

export default App
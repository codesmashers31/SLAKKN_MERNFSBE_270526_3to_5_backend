import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {
  
  const [theme,setTheme] = useState(false)

  const themeChange = ()=>{

    setTheme(!theme)

  }
  
  return (<>
  
  <ThemeContext.Provider value={{theme,setTheme,themeChange}}>
   
   {children}

  </ThemeContext.Provider>
  
  </>)
}

export default ThemeProvider
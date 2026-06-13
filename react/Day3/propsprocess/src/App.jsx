import About from "./components/About"
import Product from "./components/Product"


const App = () => {

  const dataValue = "This is My Data" 
  const productCatvalue = 2000
  const dataString = "This is my Process"


  
  return (
    <>
    <Product productName = {{dataValue,productCatvalue}}  />
    <About  name = {dataString}   />

    </>
  )
}

export default App

// import Button from "./components/Button"
// import withCounter from "./hoc/withCounter"

import { useState } from "react"
import InputBox from "./components/InputBox"
import withInput from "./hoc/withInput"
import SelectOption from "./components/SelectOption"
import withSelection from "./hoc/withSelection"

// const EnhancedComponent = withCounter(Button)
// const CLickComponent = withCounter(Button)
// //console.log(EnhancedComponent);

// const App = () => {

//     const clickData = ()=>{

//         alert('RUnning')
        
//     }
//   return (
//     <>
//     <EnhancedComponent title={"Share"} count={300} onclick ={clickData} />
    
//     <Button title={"Commend"} count={200} />
//   <CLickComponent title={"Like"} count={200} />
    
//     </>
//   )
// }

// export default App





// const NumberEnhanceInput = withInput(InputBox)

// const App = () => {


//   const [numbers,setNumbers] = useState("")
//   const [color,setColors] = useState("")

//  const [datas,setData] = useState([])
//   const ValueTake = (e)=>{

//     setNumbers(e.target.value)



//   }


//   const clickdata = ()=>{
       

//    for(let i =1;i<=numbers;i++){
         
//         //console.log(numbers);
        
// setData((perv)=>[...perv, i])

//    }
//   }
//   const ColorTake = (e)=>{

//     setColors(e.target.value)

//   }
//   return (
//     <div>
     
//       <NumberEnhanceInput text={"Enter The Number"} taketheValue={ValueTake} valuedata = {datas} clickdata={clickdata}  />
//       <InputBox text={"Enter The Color"} taketheValue={ColorTake} valuedata={color} />
     
//     </div>
//   )
// }

// export default App


const EnhancedComponent = withSelection(SelectOption)

const App = () => {
  return (
    <>
    <EnhancedComponent arr={["React","Mongo","js"]}  />
    <SelectOption arr = 
    {[1,2,3,4,5,]}/>
    </>
  )
}

export default App

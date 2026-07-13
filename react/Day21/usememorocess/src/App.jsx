// import { useMemo, useState } from "react"

import { useEffect, useMemo, useState } from "react"


// const Calculate = (number)=>{


   
//    for(let i=0;i<=10000;i++){

//       console.log(i);
      

//    }

//    return number * 2


// }




// const App = () => {
 
//   const [theme,SetTheme] = useState(false)

//    const [numbervalue,setNumberValue] = useState("")

//    const handelChange = (e)=>{

//      setNumberValue(e.target.value)

//    }

//   const count = useMemo(()=>{
     
//     return Calculate(numbervalue)

//    },[numbervalue])

    

//     const HandelClick = ()=>{

//       SetTheme(!theme)

//     }


//   const light = {

//     backgroundColor:"white",
//     color:"black"

//   }

//   const dark = {
//     backgroundColor:"black",
//     color:"white"
//   }

//   return (
//    <>
//    <h1>
//     {count}
//    </h1>
//    <input type="number" placeholder="Enter The Number" onChange={handelChange} />
//    <div style={theme?light:dark}>
//     Box
//    </div>
//    <button onClick={HandelClick}>Theme Change</button>
//    </>
//   )
// }

// export default App
const searchProducts = (search , data)=>{
console.log("filter")
  return data.filter((e)=>e.productName.toLowerCase().includes(search.toLowerCase()))
        
}

const App= ()=>{
console.log("componr")
  const [search,setSearch] = useState("")
  const [theme,SetTheme] = useState(false);
  const data=[
    {productId:100,productName:"keyboard",productPrice:70},
    {productId:101,productName:"iphone",productPrice:100},
    {productId:102,productName:"mouse",productPrice:200},
    {productId:103,productName:"printer",productPrice:300}
    
  ]
  const handleChane=(e)=>{
    //console.log(e.target.value)
    setSearch(e.target.value)
  }

  const filter= useMemo(()=>{

   return  searchProducts(search , data)

  },[search]) 



  const handelChange=()=>{
SetTheme(!theme)
  }

    const light = {

    backgroundColor:"white",
    color:"black"

  }

  const dark = {
    backgroundColor:"black",
    color:"white"
  }

  return(
    <>
    <input type="text" onChange={handleChane} />
    {
      filter.map((e)=>(
        <div key={e.productId}>
          <h1>{e.productName}</h1>
          <p>{e.productPrice}</p>
        </div>
      ))
    }

    <div style={theme?light:dark}>
      <h1>Box</h1>
    </div>
    <button onClick={handelChange}>Click</button>
    </>
  )
}
export default App




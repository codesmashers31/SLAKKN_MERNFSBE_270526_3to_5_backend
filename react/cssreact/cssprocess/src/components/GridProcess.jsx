import { useEffect, useState } from "react"


const GridProcess = () => {

    const [userData,setUserData] = useState([])


   

   useEffect(()=>{
     const getData = async()=>{

        const fetchget = await fetch("https://dummyjson.com/products?limit=4")
        const changeData = await fetchget.json()
        setUserData(changeData.products)

    }
    getData()
   },[])



  return (
   <>
   <div className="parent"> 
    {userData.map((e,i)=>(

        <div key={i+1} className="box-1">
            <img src={e.images} alt="" />
            <h4>{e.title}</h4>
            <p>{e.price}</p>
            <p className="my-2">{e.rating}</p>
            <button className="bg-blue-600 text-white p-2 rounded">Buy Now</button>
        </div>

    ))}
    
   </div>
   </>
  )
}

export default GridProcess

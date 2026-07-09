import { useEffect, useState } from "react"


const useFetch = (url) => {
 const [saveData,setSaveData] = useState([])
 const [loading,setLoading] = useState(true)
 const [error,setError] = useState("")
 
 const [search,setSearch] = useState("")

 
 
 const getData = async()=>{

        try {

         const fetchData = await fetch(url)
         const changeData = await  fetchData.json()
         setSaveData(changeData)
            
        } catch (error) {
  
            setError(error.message)
            
            
        }finally{
            setLoading(false)
        }

    }
 

 useEffect(()=>{
    getData()
 },[url])


 const handelChange = (e)=>{

    setSearch(e.target.value)

 }

  return {saveData,loading,error,handelChange,search}
}

export default useFetch
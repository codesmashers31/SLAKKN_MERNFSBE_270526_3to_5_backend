import { useEffect, useState } from "react"


const App = () => {

  const [datas,setDatas] = useState([])
  const [unicat,setUniCat] = useState([])
  const [catsave,setCatSave] = useState("")

  const [search,setSearch] = useState("")

  const [sortValue,setSortvalue] = useState("")




  const responceDatas = async()=>{

    
    try {

      const getData = await fetch("https://dummyjson.com/products")

      const changeData = await getData.json()

      //console.log(changeData.products);

      setDatas(changeData.products)
     
      const takeCat =  changeData.products.map((e)=>e.category)
      //console.log(takeCat);
      
      const uniDatas = [...new Set(takeCat)]

     //console.log(uniDatas);
     setUniCat(uniDatas)
      
    } catch (error) {

      alert('error',error)
      
    }




  }


  const takedata = (e)=>{

    setSearch(e.target.value)

    
    

  }
  

  const handleChange = (e)=>{

     setCatSave(e.target.value)

     //alert(catsave)

  }

  useEffect(()=>{
    responceDatas()
  },[])

  
  // const handleCat = 






 //console.log(handleCat);
 
 const sortvalue = (e)=>{

setSortvalue(e.target.value)

 }

    let sortProdcts = [...datas]


    if(search){
     sortProdcts = sortProdcts.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    }

    //console.log(sortProdcts);
    



  if(catsave){
    sortProdcts =  sortProdcts.filter((e)=>e.category === catsave) 
  }

 

      if(sortValue === "asc"){

      sortProdcts = sortProdcts.sort((a,b)=>a.price-b.price)

    }

    if(sortValue === "dec"){

     sortProdcts =  sortProdcts.sort((a,b)=>b.price-a.price)

    }




  return (
   <>
   <div>
    <p>Search & Filter</p>
   </div>
     
    <input type="text" placeholder="Enter the Value" onChange={takedata}  />
     <select onChange={handleChange} >
      <option value="">Select All</option>
      {unicat.map((e,i)=>(
        <option value={e} key={i+1}>{e}</option>
      ))}
     </select>

    
    <select onChange={sortvalue}> 
      <option value="">Choose One..</option>
      <option value="dec">Hig to Low</option>
      <option value="asc">Low to High</option>
    </select>

     <div style={{padding:"10px", display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {sortProdcts.map((e)=>(
        <div key={e.id} style={{backgroundColor:"blue",color:"white", padding:"5px"}}>
          <p>{e.title}</p>
          <p>{e.category}</p>
           <p>{e.price}</p>
        </div>
      ))}
     </div>

   
   </>
  )
}

export default App

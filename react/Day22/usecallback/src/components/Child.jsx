import React, { useActionState, useEffect, useMemo, useState } from 'react'

const filterProduct =(data,find,sortValue)=>{

    for(let i = 0 ; i<=100 ; i++){
        console.log("exp:",i)
        
    }

    let productFilter = data.filter((e)=>e.title.toLowerCase().includes(find.toLowerCase())) 

    console.log(sortValue);
    

    if (sortValue === "asc"){
        productFilter.sort((a,b)=>a.price-b.price)
    }

    if(sortValue === "dsc"){
         productFilter.sort((a,b)=>b.price-a.price)      
    }

    

    return productFilter
}



const Products = () => {

        const [productsData,setProductsData] = useState([])
        const [search,setSearch] = useState("")
        const [theme,setTheme] = useState(true)
        const [sortValue,setSortValue] = useState("")

        // const productsData = [
        //     {productId : 101 ,productName : "Monitor" ,productPrice : 1000 },
        //     {productId : 102 ,productName : "KeyBoard" ,productPrice : 500 },
        //     {productId : 103 ,productName : "Mouse" ,productPrice : 300 },
        //     {productId : 104 ,productName : "CPU" ,productPrice : 2000 },
        //     {productId : 105 ,productName : "Scanner" ,productPrice : 5000 },
        //     {productId : 106 ,productName : "Printer" ,productPrice : 2000 }
        // ]


        const fetchData = async()=>{
            const getData = await fetch("https://dummyjson.com/products")
            const changeData = await getData.json()
            const product = changeData.products
            setProductsData(product) 
            setSortValue(null)      
        }


        useEffect(()=>{
            fetchData()
            
            
        },[])
        console.log("COmp");
        
        

        const handleChange = (e)=>{
            setSearch(e.target.value)
            console.log(e.target.value);
            
        }


        const foundProducts = useMemo(()=>{
            return  filterProduct(productsData,search,sortValue)
        },[search,sortValue])


        const dark = {
            backgroundColor : "black",
            color : "White"
        }

          const Light = {
            backgroundColor : "White",
            color : "black"
        }


        const handleClick = ()=>{
            setTheme(!theme)
        }

       

        const handleSort = (e)=>{
            setSortValue(e.target.value)   
            
        }







  return (
    <>

    <select onChange={handleSort}>
        <option selected disabled>Sort By</option>
        <option value={"asc"}>Asc</option>
        <option value={"dsc"}>Desc</option>
    </select>

    <input type="text" placeholder='Search' onChange={handleChange} />


    {
        foundProducts.map((e)=>(
            <div key={e.id}>
                <h1>{e.title}</h1>
                <p>{e.price}</p>
            </div>
        ))
    }


    <div style={theme?dark : Light}>
        <h1>Theme</h1>
    </div>

    <button onClick={handleClick}>Change</button>
    </>
  )
}

export default Products
import Products from "../components/Products"


const ProductDatas = () => {

    const arr = ["React","Node","HTML"]

    const obj = {name:"Laptop",skils:{react:"90%"},price:20000,offers:["10%","20%"],brand:"HP"}

    const arrobj = [
    {name:"Laptop",skils:{react:"90%"},price:20000,offers:["10%","20%"],brand:"HP"},
    {name:"Laptop",skils:{react:"90%"},price:20000,offers:["10%","20%"],brand:"HP"},
    {name:"Laptop",skils:{react:"90%"},price:20000,offers:["10%","20%"],brand:"HP"},
    {name:"Laptop",skils:{react:"90%"},price:20000,offers:["10%","20%"],brand:"HP"}]

    const productDatas = [

        {productName:"Laptop",price:20000,brand:["HP","DELL","AZER"]},
        {productName:"KeyBoard",price:200,brand:["HP","DELL","AZER"]},
        {productName:"mouse",price:100,brand:["HP","DELL","AZER"]},
        {productName:"Monitor",price:2000,brand:["HP","DELL","AZER"]}
]
  

// const handleClick = (productid)=>{
    
//     const removeData = productDatas.filter(())


// }

  return (
   <>
   <Products  prasantation = {productDatas}    />
   </>
  )
}

export default ProductDatas
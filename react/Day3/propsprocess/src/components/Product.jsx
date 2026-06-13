import Orders from "./Orders";


const Product = (props) => {

    console.log(props.productName);
   const {dataValue,productCatvalue} = props.productName

    
  return (
    <>
    <h1>Product Data</h1>
   <Orders  oredrsData = {{dataValue,productCatvalue}}/>
    </>
  )
}

export default Product

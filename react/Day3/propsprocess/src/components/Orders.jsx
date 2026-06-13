import ArrayPassing from "./ArrayPassing";


const Orders = (props) => {
    console.log(props);

    const {dataValue,productCatvalue} = props.oredrsData

    const arr = [2000,3000,4000,5000]
    
  return (
    <div>
        <p>Order Data</p>
      <h1>{dataValue}</h1>
      <p>{productCatvalue}</p>
      <ArrayPassing ordersData = {arr}   />
    </div>
  )
}

export default Orders


const Products = ({prasantation,deleteFunction,remove}) => {

   
//    console.log(prasantation);
   


  return (
   <>
   <table className="table">
     <thead>
         <tr>
        <th>S.no</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Brand</th>
        <th>Action</th>
      </tr>
     </thead>


     <tbody>
        {
            prasantation.map((e,i)=>(
        <tr key={i+1}>
            <td>{i+1}</td>
            <td>{e.productName}</td>
            <td>{e.price}</td>
            <td>{e.brand.map((e,i)=>(
                <p key={i+1}>{e}</p>
            ))}</td>
            <td><button onClick={()=>deleteFunction(i)}>Delete</button></td>
        </tr>
            ))
        }
     </tbody>


   </table>
   </>
  )
}

export default Products
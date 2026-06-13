

const ArrayPassing = ({ordersData}) => {

    console.log(ordersData);
    
  return (
    <div>
      {
        ordersData.map((e,i)=>(
           <p key={i+1}>{e}</p>
        ))
      }
    </div>
  )
}

export default ArrayPassing

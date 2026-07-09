import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch"


const App = () => {

 const {saveData,loading,error,handelChange,search} = useFetch("https://dummyjson.com/carts")
 
 const {counter,handleIncrement} = useCounter(0)
 
 console.log(search);
 
 if(loading){
  return <h2>Loadinggg....</h2>
 }


 if(error){
  return <p>{error}</p>
 }


//  let products = [...saveData.carts]

 //console.log(saveData);


 
   



  return (
    <>
      <div>
        {counter}

        <button onClick={handleIncrement}>Click</button>

      <input type="text" onChange={handelChange} placeholder="Search" />

        {saveData.carts.map((e)=>(

           <div key={e.id}>
          <h2>Name:{e.total}</h2>
          <p>quantity:{e.totalProducts}</p>
          <p>price:{e.totalQuantity}</p>
        </div>

        ))}
       
      </div>
    </>
  )
}

export default App
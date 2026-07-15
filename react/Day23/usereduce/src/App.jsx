// import { useReducer } from "react"

import { useReducer, useState } from "react"


// const initvalue = 0

// const reduce = (state,action)=>{

// console.log(state);
// console.log(action);

// switch(action.type){

// case "INC":

//    return state+1

// case "DEC":
//    return state-1

// case "RESET":
//   return 0

// default:
//   return initvalue
// }




// }


// const App = () => {

// const [state,dispatch] = useReducer(reduce,initvalue)


//   return (
//     <>
//     <h1>{state}</h1>
    
//     <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

//     </>
//   )
// }

// export default App





const datas = []

const reducer = (state,action)=>{


  console.log(state);
  console.log(action);

  switch(action.type){

  case "ADD":
    return [...state,action.payload]
 
  case "DELETE":
    return state.filter((e)=>e.userId!==action.payload)

  case "UPDATE":
     
     return state.map((e)=>e.userId===action.payload.userid?action.payload:e)
    
  default :

   return state

  }
  
  


}

const App = () => {


  const [userDatas,dispatch] = useReducer(reducer,datas)
  const [userName,setUserName] = useState("")
  const [editId,setEditId] = useState(null)

  const handleChange = (e)=>{

     setUserName(e.target.value)

  }


  const handleAdd = ()=>{

     
    const newDatas = {
      userId:Date.now(),
      userName:userName
    }

      dispatch({
        
        type:"ADD",
        payload:newDatas

      })

setUserName("")
  }


  const handelClick = (users)=>{

    setUserName(users.userName)
    setEditId(users.userId) 

  }


  const handledelete = (id)=>{

       dispatch({type:"DELETE",payload:id})


  }

  const handleUpdate = ()=>{

      dispatch(
        {
          type:"UPDATE",
          payload:{

            userid:editId,
            userName
          }
  
        }
      )
      
      setUserName("")
      setEditId(null)

  }

  return (
    <>
    <input type="text" placeholder="Enter the Name" value={userName} onChange={handleChange} />
    {editId===null?<button onClick={handleAdd}>Add</button>:<button onClick={handleUpdate}>Update</button>}
    


    <div>
      {userDatas.map((e)=>(
        <>
        <p key={e.userId}>{e.userName}</p>
        <button onClick={()=>handelClick(e)}>Edit</button>
        ||
        <button onClick={()=>handledelete(e.userId)}>Delete</button>
        </>
      ))}
    </div>
    </>
  )
}

export default App
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DNC, Inc } from '../redux/counterSlice';


const Counter = () => {
 


    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()


  return (
    <>
    <h1>Count : {count}</h1>

    <button onClick={()=>dispatch(Inc())}>Increment</button>
    <button onClick={()=>dispatch(DNC())}>Decrement</button>
  
    </>
  )
}

export default Counter
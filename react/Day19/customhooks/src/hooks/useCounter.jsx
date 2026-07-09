import React, { useState } from 'react'

const useCounter = (count) => {


    const [counter,setCounter]=useState(count);

    const handleIncrement=()=>{

        setCounter((prev)=>prev+1);
    }
     const handleDecrement=()=>{

        if(counter<1){
            return
        }

        setCounter((prev)=>prev-1);
        
    }
     const handleReset=()=>{

        setCounter(0);
    }



    return {counter,handleIncrement,handleDecrement,handleReset}

}

export default useCounter
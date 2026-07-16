import  { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({


    name: "counter",
    initialState : { count:0},
    reducers : {
        Inc : (state)=> {state.count += 1},
        DNC : (state)=> {state.count -= 1},
       
        //incrementCount : (state,action)=> {state.count += action.payload}

    }




})


export const  {Inc,DNC} = counterSlice.actions
export default counterSlice.reducer
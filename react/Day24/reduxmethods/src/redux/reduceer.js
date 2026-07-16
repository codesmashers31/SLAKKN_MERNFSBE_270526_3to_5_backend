const init = {count:0}

const reduceer = (state=init,action)=>{

  switch (action.type){

   case "INCREMENT":

   return  {...state,count: state.count+1}
  
   case "DECREMENT":

   return  {...state,count: state.count-1}

      case "RESET":

   return  init

   default:
     return state

  }



}


export default reduceer
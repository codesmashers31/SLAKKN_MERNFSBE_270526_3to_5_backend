// import { Component } from 'react' 




// class App extends Component{



    
//   constructor(){
    
//     super()

    
//     this.state = {count:0}
   
    

//   }

//   inc = ()=>{

//       this.setState({count: this.state.count+1})


//   }

//   componentDidMount(){
//       console.log('Mount Running');
      
//     }

//     componentDidUpdate(){
//       console.log('Mount Update Running');
      
//     }

//     componentWillUnmount(){
//       console.log('UnMount');
//     }

//    render(){
//     console.log('Component');
//     return (
//       <>
//       <h1>THis is Class components {this.state.count}</h1>
//       <button onClick={this.inc}>Click Me</button>
//       </>
//     )
//    }



// }

// export default App




import { useState } from "react"

const App = () => {

console.log('Running component....');


const [count,setCount] = useState(true)

const handleClick = ()=>{

  setCount(!count)

}


  return (
    
   <>
   <div>
   {count? <h1>{"This is Vliad"}</h1>: <h1>{"Data invalid"}</h1>}
       <button onClick={handleClick}>CLick Me</button>
   </div>
   </>

  )
}

export default App



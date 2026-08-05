import { useLocation } from "react-router-dom"


const DashBoard = () => {
 

    const users = useLocation()

    //console.log(users.state.id);
    


  return (
   <>
   <h1>Welcome! {users.state.id}</h1>
   <p>{users.state.email}</p>
   </>
  )
}

export default DashBoard
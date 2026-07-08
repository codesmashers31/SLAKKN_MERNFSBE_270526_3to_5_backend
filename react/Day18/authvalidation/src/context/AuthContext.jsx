import { createContext, useEffect, useState } from "react";

const  AuthContext = createContext() 

export default AuthContext

export const ProviderContext = ({children})=>{

const [user,setUser] = useState(null)

useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))


    if(currentUser){

        setUser(currentUser)

    }


},[])


const login = (userdata)=>{

    localStorage.setItem("currentUser",JSON.stringify(userdata))

    setUser(userdata)
}



const logout = ()=>{

    localStorage.removeItem("currentUser")

    setUser(null)

}


return (<>

<AuthContext.Provider value={{user,login,logout}}>
 
 {children}
    
</AuthContext.Provider>

</>)



}



import axios from "axios"
import { createContext, useEffect, useState } from "react"
export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user , setUser] = useState(null)
    const [ready, setReady] = useState(false)
    
    useEffect(()=>{
        if(!user){
            axios.get("/profile")
        }
    }, [])
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}

        </UserContext.Provider>
    )
}
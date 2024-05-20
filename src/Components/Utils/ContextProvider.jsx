import { createContext, useContext, useState } from "react";

const MyContext= createContext();

function ContextProvider({children}) {
    const [data,setData]=useState(null)
    const [login,setLogin]=useState(null)

    const userDetails=(data)=>{
        setData(data)
    }

    return (
    <MyContext.Provider value={{data,setData,login,setLogin}}>
        {children}
    </MyContext.Provider>
      );
}

export default ContextProvider;

export const useMyContext=()=>{
return useContext(MyContext)
}
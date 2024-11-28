import { createContext, useState } from "react";

export const AuthContext= createContext()

export const StoreContext= ({children})=> {
    const [storeData, setStoreData]=useState({
        status:false,
        store: null
    })

    const collectData= (calculateData)=> {
        setStoreData({
            status:true,
            store:calculateData
        })
    }

     // Reset function
  const resetData = () => {
    setStoreData({
      status: false,
      store: null,
    })
  }

    return (
        <AuthContext.Provider value={{collectData, resetData, storeData}}>
            {children}
        </AuthContext.Provider>

    )
}
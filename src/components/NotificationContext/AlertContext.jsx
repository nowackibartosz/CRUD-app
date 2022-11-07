import { createContext, useState, useContext } from "react"




export const AlertContext = createContext({ undefined, isOpen: false })

export const AlertProvider=({children})=>{
    // const [isDarkTheme,setIsDarkTheme]=useState(false)

    return <AlertContext.Provider>


        <div className="notificator">


            
        </div>
    
    
    
    </AlertContext.Provider>
}
export const useAlertContext=()=>{
    const ctx=useContext(AlertContext)

    if(!ctx){ // poza komponentem zwróci nulla
        throw new Error("Missing themeContext, it's not wrapped in ThemeProvider")
    }
    return ctx;
}
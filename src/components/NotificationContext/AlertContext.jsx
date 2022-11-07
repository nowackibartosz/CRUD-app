import {createContext,useState,useContext} from "react"
const NotificationContext = createContext(undefined)

export const NotificationProvider=({children})=>{
    // const [isDarkTheme,setIsDarkTheme]=useState(false)

    return <NotificationContext.Provider>


        <div className="notificator">


            
        </div>
    
    
    
    </NotificationContext.Provider>
}
export const useNotificationContext=()=>{
    const ctx=useContext(NotificationContext)

    if(!ctx){ // poza komponentem zwróci nulla
        throw new Error("Missing themeContext, it's not wrapped in ThemeProvider")
    }
    return ctx;
}
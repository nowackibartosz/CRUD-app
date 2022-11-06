

// const ThemeContext = createContext(undefined)

// export const ThemeProvider=({children})=>{
//     const [isDarkTheme,setIsDarkTheme]=useState(false)

//     return <ThemeContext.Provider value={{isDarkTheme,setIsDarkTheme}}>{children}</ThemeContext.Provider>
// }
// export const useThemeContext=()=>{
//     const ctx=useContext(ThemeContext)

//     if(!ctx){ // poza komponentem zwróci nulla
//         throw new Error("Missing themeContext, it's not wrapped in ThemeProvider")
//     }
//     return ctx;
// }

import React from "react";

export const ThemeSelectorContext = React.createContext({
  themeName: "dark"
});


import React from "react";
import { useUserContext } from "../UserContext/UserContext";

const ProtectedWrapper = ({ children }) => {
  const { isLogged } = useUserContext();

    return(
    
        <div>{children}</div>
        // <div className="wrapik">{isLogged ? { children } : null} </div>
    
    )
};

export default ProtectedWrapper;

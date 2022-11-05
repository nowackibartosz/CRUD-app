import React from "react";
import { useUserContext } from "../UserContext/UserContext";
import { Navigate } from "react-router-dom";
const ProtectedWrapper = ({ children }) => {
  const { isLogged } = useUserContext();

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }
  return children;
  // <div className="wrapik">{isLogged ? { children } : null} </div>
};

export default ProtectedWrapper;

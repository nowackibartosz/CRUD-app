import React from "react";
import { useUserContext } from "../UserContext/UserContext";

import FakeLoginComponent from "../FakeLoginComponent/FakeLoginComponent";

const ProtectedWrapper = ({ children }) => {
  const { isLogged } = useUserContext();

  return <div className="wrapik">{isLogged ? { children } : null} </div>;
};

export default ProtectedWrapper;

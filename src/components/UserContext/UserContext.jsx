import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);

  const logIn = () => {
    // znalezc usera po username, i sprawdzic jego haslo

    setIsLogged(true);
  };

  const logOut = () => {
    setIsLogged(false);
  };

  return (
    <UserContext.Provider value={{ isLogged, users, setUsers, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    // poza komponentem zwróci nulla
    throw new Error("Missing UserContext, it's not wrapped in UserProvider");
  }
  return ctx;
};

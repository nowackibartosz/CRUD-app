import { createContext, useContext, useState } from "react";

/*
- [ ] Stwórz FakeRegisterComponent, który będzie zawierał pola login, hasło i powtórz hasło. Konto zapisz do UserContextu.
- [ ] Stwórz FakeLoginComponent, który będzie zawierał formularz z walidacją oraz UserContext. UserContext ma przechowywać dane o tym czy użytkownik jest zalogowany (na ten moment zrób tam metodę logIn i logOut), w metodzie logIn sprawdzaj wpisane w formularzu dane i zmień stan na zalogowany jeśli wprowadzone dane są prawidłowe, czyli czy taki uzytkownik juz sie zarejestrowal. Login komponent powinien pokazywać się na stronie głównej.
*/
const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [users, setUsers] = useState([]);
 
  const logIn = () => {
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

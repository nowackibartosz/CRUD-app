import { createContext, useState, useContext } from "react";
const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState("none");
  const [alertText, setAlertText] = useState("");

  const showNotification = (text, type, timeout) => {
    setAlertText(text);
    setAlert(type);
    setTimeout(() => {
      clear();
    }, timeout * 1000 || 10000);
  };

  const clear = () => setAlert("none");

  return (
    <AlertContext.Provider value={{ alert, alertText, showNotification }}>
      {children}
    </AlertContext.Provider>
  );
};
export const useAlertContext = () => {
  const ctx = useContext(AlertContext);

  if (!ctx) {
    // poza komponentem zwróci nulla
    throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
  }
  return ctx;
};

export const Alert = () => {
  const { alert, alertText } = useAlertContext();
  return alert !== "none" ? <p>{alertText}</p> : null;
};

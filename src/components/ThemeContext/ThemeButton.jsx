import React from "react";
import "./ThemeButton.css";
import { useThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();

  return (
    <div>
      <label className="form-switch">
        <input
          type="checkbox"
          onChange={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        />
        <i></i>
        Light/Dark mode
      </label>
    </div>
  );
};

export default ThemeButton;

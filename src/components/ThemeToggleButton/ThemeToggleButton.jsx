import "./theme-toggle-button.css";
import { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function ThemeToggleButton({ onChange }) {
  const [theme, setTheme] = useState({ theme: "dark" });

  useEffect(() => {
    if (onChange) onChange(theme);
  }, [theme.theme]);

  function themeChangeHandler() {
    setTheme((state) =>
      state.theme === "dark" ? { theme: "light" } : { theme: "dark" }
    );
  }

  return (
    <div className="toggle-button-container">
      <button onClick={themeChangeHandler}>
        {theme.theme == "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}

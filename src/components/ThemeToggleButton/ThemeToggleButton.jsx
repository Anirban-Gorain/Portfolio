import "./theme-toggle-button.css";
import { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { memo } from "react";

const ThemeToggleButton = ({ onChange }) => {
  const [theme, setTheme] = useState({ theme: "dark" });

  console.log("ThemeToggleButton rerendering....");

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
};

export default memo(ThemeToggleButton);

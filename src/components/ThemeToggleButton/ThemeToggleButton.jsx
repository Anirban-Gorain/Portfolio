import "./theme-toggle-button.css";
import { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { memo } from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log("ThemeToggleButton rerendering....");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      `${isDarkMode ? "light" : "dark"}`
    );
  }, [isDarkMode]);

  function themeChangeHandler() {
    setIsDarkMode((mode) => !mode);
  }

  return (
    <div className="toggle-button-container">
      <button onClick={themeChangeHandler}>
        {isDarkMode == true ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default memo(ThemeToggleButton);

import "./hamburger.css";
import { useState, useEffect } from "react";

export default function Hamburger({ onChange }) {
  const [hamburgerState, setHamburgerState] = useState({
    isHamburgerOpen: true,
  });

  function handleChange() {
    setHamburgerState((state) => ({ isHamburgerOpen: !state.isHamburgerOpen }));
  }

  useEffect(() => {
    if (onChange) onChange(hamburgerState);
  }, [hamburgerState.isHamburgerOpen]);

  return (
    <div className="hamburger-container" onClick={handleChange}>
      <div
        className={`line ${hamburgerState.isHamburgerOpen ? "cross-1" : ""}`}
      ></div>
      <div
        className={`line ${hamburgerState.isHamburgerOpen ? "hidden" : ""}`}
      ></div>
      <div
        className={`line ${hamburgerState.isHamburgerOpen ? "cross-2" : ""}`}
      ></div>
    </div>
  );
}

import "./hamburger.css";

export default function Hamburger({ isHamburgerOpen, setIsHamburgerOpen }) {
  function handleChange() {
    setIsHamburgerOpen((state) => !state);
  }

  return (
    <div className="hamburger-container" onClick={handleChange}>
      <div className={`line ${isHamburgerOpen ? "cross-1" : ""}`}></div>
      <div className={`line ${isHamburgerOpen ? "hidden" : ""}`}></div>
      <div className={`line ${isHamburgerOpen ? "cross-2" : ""}`}></div>
    </div>
  );
}

import { LiaLaptopCodeSolid } from "react-icons/lia";
import "./main-structure.css";
import Hamburger from "../components/Hamburger/Hamburger";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import folderStructure from "../utilities/folderStructure";
import Explorer from "../components/Explorer/Explorer";
import TabBar from "../components/TabBar/TabBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainStructure() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);

  console.log(isHamburgerOpen);

  return (
    <div className="app-container">
      <div className="menu-bar">
        <div className="menu-section app-logo-section">
          <LiaLaptopCodeSolid />
        </div>
        <div className="menu-section hamburger-button-section">
          <Hamburger
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
        </div>
        <div className="menu-section theme-toggle-button-section">
          <ThemeToggleButton />
        </div>
      </div>
      <div
        className={`file-explorer-section ${
          isHamburgerOpen ? "" : "hide-explorer"
        }`}
      >
        <div className="file-explorer-header">
          <span className="roboto-section-heading">Explorer</span>
        </div>
        <div className="file-explorer">
          <Explorer tree={folderStructure} />
        </div>
      </div>
      <div className="editor-container">
        <TabBar />
        <Outlet />
      </div>
    </div>
  );
}

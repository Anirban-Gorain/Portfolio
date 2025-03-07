import "./main-structure.css";
import Hamburger from "../components/Hamburger/Hamburger";
import ThemeToggleButton from "../components/ThemeToggleButton/ThemeToggleButton";
import folderStructure from "../utilities/folderStructure";
import Explorer from "../components/Explorer/Explorer";
import TabBar from "../components/TabBar/TabBar";

export default function MainStructure() {
  return (
    <div className="app-container">
      <div className="menu-bar">
        <div className="menu-section app-logo-section">
          <img src="../../public/laptop-code-solid.svg" />
        </div>
        <div className="menu-section hamburger-button-section">
          <Hamburger onChange={(state) => console.log(state)} />
        </div>
        <div className="menu-section theme-toggle-button-section">
          <ThemeToggleButton onChange={(state) => console.log(state)} />
        </div>
      </div>
      <div className="file-explorer-section">
        <div className="file-explorer-header">
          <span className="roboto-section-heading">Explorer</span>
        </div>
        <div className="file-explorer">
          <Explorer tree={folderStructure} />
        </div>
      </div>
      <div className="editor-container">
        <TabBar />
      </div>
    </div>
  );
}

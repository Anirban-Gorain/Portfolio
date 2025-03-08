import { useTabContext } from "../../contexts/tabBarContext";
import "./tab.css";
import { BsEyeglasses } from "react-icons/bs";

export default function Tab({ fileName }) {
  const [tabs, setTabs] = useTabContext();

  function tabCloseHandler() {
    const tempTabs = [...tabs];
    const indOfTheCurrentTab = tempTabs.findIndex((fn) => fn == fileName);
    tempTabs.splice(indOfTheCurrentTab, 1);
    setTabs(tempTabs);
  }

  return (
    <div className="tab-container">
      <div className="file-icon-section">
        <BsEyeglasses />
      </div>
      <div className="file-name-section">
        <span className="file-name mont-file-heading">{fileName}</span>
      </div>
      <div className="close-button-section" onClick={tabCloseHandler}>
        <button className="close">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </button>
      </div>
    </div>
  );
}

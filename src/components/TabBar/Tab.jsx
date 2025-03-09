import { useTabContext } from "../../contexts/tabBarContext";
import "./tab.css";
import { BsEyeglasses } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Tab({ fileName }) {
  const [tabs, setTabs] = useTabContext();
  const navigate = useNavigate();

  function tabCloseHandler(e) {
    e.stopPropagation();

    const tempTabs = [...tabs];
    const indOfTheTabToBeClosed = tempTabs.findIndex(
      (fn) => fn.file === fileName
    );
    tempTabs.splice(indOfTheTabToBeClosed, 1);

    if (indOfTheTabToBeClosed == 0 && tabs.length > 1) {
      navigate(tabs[1].route);
    } else if (tabs.length == 1) {
      navigate("/anirban-gorain");
    } else {
      navigate(tabs[0].route);
    }

    setTabs(tempTabs);
  }

  function tabClickHandler(e) {
    const clickedTabIndex = tabs.findIndex((obj) => fileName == obj.file);
    navigate(tabs[clickedTabIndex].route);
  }

  return (
    <div className="tab-container" onClick={tabClickHandler}>
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

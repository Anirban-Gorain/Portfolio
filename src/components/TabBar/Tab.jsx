import { useTabContext } from "../../contexts/tabBarContext";
import "./tab.css";
import { BsEyeglasses } from "react-icons/bs";
import { useRef } from "react";

export default function Tab({ fileName }) {
  const [tabs, setTabs, currentTab] = useTabContext();
  const refOfTheFileName = useRef();

  function tabCloseHandler() {
    const tempTabs = [...tabs];
    const indOfTheTabToBeClosed = tempTabs.findIndex((fn) => fn === fileName);
    tempTabs.splice(indOfTheTabToBeClosed, 1);
    setTabs(tempTabs);

    if (currentTab.current > indOfTheTabToBeClosed) {
      // No need to change
    } else if (
      currentTab.current === indOfTheTabToBeClosed &&
      tabs.length - indOfTheTabToBeClosed > 0
    ) {
      // No need to change
    } else if (
      currentTab.current === indOfTheTabToBeClosed &&
      tabs.length - indOfTheTabToBeClosed === 0
    ) {
      currentTab.current--;
    }
  }

  function tabClickHandler(e) {
    const clickedTabsFileName = refOfTheFileName.current.innerText;
    const clickedTabIndex = tabs.findIndex((fn) => clickedTabsFileName == fn);
    currentTab.current = clickedTabIndex;
  }

  return (
    <div className="tab-container" onClick={tabClickHandler}>
      <div className="file-icon-section">
        <BsEyeglasses />
      </div>
      <div className="file-name-section">
        <span className="file-name mont-file-heading" ref={refOfTheFileName}>
          {fileName}
        </span>
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

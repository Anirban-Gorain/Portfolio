import { useTabContext } from "../../contexts/tabBarContext";
import Tab from "./Tab";
import "./tab-bar.css";
import { memo } from "react";

const TabBar = () => {
  // console.log("TabBar rerendering....");

  const [tabs, _] = useTabContext();

  return (
    <div className="tab-bar-container">
      {tabs.map((fileName, i) => (
        <Tab key={i} fileName={fileName} />
      ))}
    </div>
  );
};

export default memo(TabBar);

import { useTabContext } from "../../contexts/tabBarContext";
import Tab from "./Tab";
import "./tab-bar.css";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
  // console.log("TabBar rerendering....");

  const [tabs, _] = useTabContext();

  return (
    <div className="tab-bar-container">
      {tabs.map((obj, i) => (
        <Tab key={i} fileName={obj.file} />
      ))}
    </div>
  );
};

export default memo(TabBar);

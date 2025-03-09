import { useTabContext } from "../../contexts/tabBarContext";
import Tab from "./Tab";
import "./tab-bar.css";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
  // console.log("TabBar rerendering....");

  const [tabs, _] = useTabContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabs.length === 0) navigate("/anirban-gorain");
  }, [tabs]);

  return (
    <div className="tab-bar-container">
      {tabs.map((obj, i) => (
        <Tab key={i} fileName={obj.file} />
      ))}
    </div>
  );
};

export default memo(TabBar);

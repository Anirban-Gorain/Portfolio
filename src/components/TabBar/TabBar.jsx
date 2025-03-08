import Tab from "./Tab";
import "./tab-bar.css";
import { memo } from "react";

const TabBar = () => {
  console.log("TabBar rerendering....");

  return (
    <div className="tab-bar-container">
      {new Array(5).fill().map((_, __) => (
        <Tab key={__} />
      ))}
    </div>
  );
};

export default memo(TabBar);

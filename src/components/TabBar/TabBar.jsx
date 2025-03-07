import Tab from "./Tab";
import "./tab-bar.css";

export default function TabBar() {
  return (
    <div className="tab-bar-container">
      {new Array(5).fill().map(() => (
        <Tab />
      ))}
    </div>
  );
}

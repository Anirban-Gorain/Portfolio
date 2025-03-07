import "./tab.css";
import { BsEyeglasses } from "react-icons/bs";

export default function Tab() {
  return (
    <div className="tab-container">
      <div className="file-icon-section">
        <BsEyeglasses />
      </div>
      <div className="file-name-section">
        <span className="file-name mont-file-heading">
          This is the file name{" "}
        </span>
      </div>
      <div className="close-button-section">
        <button className="close">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </button>
      </div>
    </div>
  );
}

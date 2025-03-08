import "./explorer.css";
import { useState, memo } from "react";
import { capitalize } from "../../utilities/stringUtilities";
import { FaFolderOpen } from "react-icons/fa6";
import { FaFolderClosed } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";

const Explorer = ({ tree }) => {
  if (!tree) {
    return;
  }

  console.log("Explorer rerendering....");

  return (
    <>
      {tree.map((child, ind) => {
        const name = capitalize(child.name);

        if (child.type == "folder") {
          const [hideFolder, setHideFolder] = useState(true);

          return (
            <div
              className={`folder-container roboto-font-filer-explore-text ${
                hideFolder ? "close-folder" : "open-folder"
              }`}
              key={ind}
            >
              <div key={child.name} className="folder">
                <div
                  className="folder-container-header"
                  onClick={() => setHideFolder((state) => !state)}
                >
                  <span>
                    {hideFolder ? (
                      <FaFolderClosed className="explorer-icon-color" />
                    ) : (
                      <FaFolderOpen className="explorer-icon-color" />
                    )}{" "}
                    {name}
                  </span>
                </div>

                {child.children && <Explorer tree={child.children} />}
              </div>
            </div>
          );
        } else {
          return (
            <div key={child.name} className="file">
              {
                <span className="explorer-icon-color">
                  <FaFile />{" "}
                </span>
              }{" "}
              {name}
            </div>
          );
        }
      })}
    </>
  );
};

export default memo(Explorer);

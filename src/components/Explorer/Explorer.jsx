import "./explorer.css";
import { useState, memo, useEffect } from "react";
import { capitalize } from "../../utilities/stringUtilities";
import { FaFolderOpen } from "react-icons/fa6";
import { FaFolderClosed } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { useTabContext } from "../../contexts/tabBarContext";
import { useNavigate } from "react-router-dom";

const File = memo(({ name, route }) => {
  // console.log(name + " File is rerendering");

  const [tabs, setTabs] = useTabContext();
  const navigate = useNavigate();

  function fileClickHandler(file, route) {
    navigate(route);

    if (tabs.findIndex((obj) => obj.file === file) != -1) return;

    const temp = [...tabs, { file, route }];
    setTabs(temp);
  }

  return (
    <div
      key={name}
      className="file"
      onClick={() => fileClickHandler(name, route)}
    >
      <span className="explorer-icon-color">
        <FaFile />
      </span>{" "}
      {name}
    </div>
  );
});

const Explorer = ({ tree }) => {
  if (!tree) {
    return;
  }

  // console.log("Explorer rerendering....");

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
          return <File key={ind} name={name} route={child.route} />;
        }
      })}
    </>
  );
};

export default memo(Explorer);

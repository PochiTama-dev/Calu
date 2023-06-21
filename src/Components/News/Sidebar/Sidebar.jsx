import React, { useState } from "react";
import "./sidebar.css";
import Blogs from "./constants";

const Sidebar = () => {
  const [showBar, setShowBar] = useState(true);

  const handleBar = () => {
    setShowBar(!showBar);
  };

  return (
    <div>
      <aside className={showBar ? "bar_op " : "bar_show "}>
        <div className="sidebar">
          <div className="close_btn_container">
            <button className="close_btn" onClick={handleBar}>
              X
            </button>
          </div>
          <div className="blogs_container">
            {Blogs.map((Blogs) => (
              <div className="blogs">
                <a href="">{Blogs.title}</a>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <span onClick={handleBar} className="open_btn">
        <p>VER MAS</p>
      </span>
    </div>
  );
};

/*<div className="sidebar">
      <aside className={showLinks ? "links " : "link show "}>
        {Blogs.map((Blogs) => (
          <div className="blogs">
            <a href="">{Blogs.title}</a>
          </div>
        ))}
      </aside>
      <span onClick={handleLinks} className="btn">
        <p>VER MAS</p>
      </span>
    </div>*/

export default Sidebar;

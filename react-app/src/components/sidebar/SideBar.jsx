import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import { SIDEBAR_MENU } from "./../../constants/const";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Bonds Management</h3>
          <div className="sidebar-list">
            {SIDEBAR_MENU.map((option, index) => (
              <div className="sidebar-list-item" key={index}>
                <Link
                  to={option.toLowerCase()}
                  className="sidebar-list-item-link"
                >
                  {option}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

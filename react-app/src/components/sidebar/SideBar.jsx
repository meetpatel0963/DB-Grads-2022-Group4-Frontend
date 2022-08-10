import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import Button from "@mui/material/Button";
import { AuthContext } from "../../authContext";

import "./sidebar.css";
import { SIDEBAR_MENU } from "./../../constants/const";

export const Sidebar = () => {
  const appContext = useContext(AuthContext);
  const { login, setLogin } = appContext;

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("access-token");
    localStorage.removeItem("username");
    setLogin(false);
    window.location = "/";
  };

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
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "200px",
              }}
            >
              <Link to={"/signup"}>
                <Button data-tip data-for="registerTip">
                  <AiOutlineUserAdd size={30} style={{ margin: "5px" }} />
                </Button>
              </Link>
              <ReactTooltip id="registerTip" place="top" effect="solid">
                Sign Up
              </ReactTooltip>
              <Link to={"/signin"}>
                <Button data-tip data-for="loginTip">
                  <BiLogIn size={30} style={{ margin: "5px 0px" }} />
                </Button>
              </Link>
              <ReactTooltip id="loginTip" place="top" effect="solid">
                Sign In
              </ReactTooltip>
              <Button data-tip data-for="logoutTip" onClick={handleLogout}>
                <BiLogOut size={30} style={{ margin: "5px 0px" }} />
              </Button>
              <ReactTooltip id="logoutTip" place="top" effect="solid">
                Logout
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

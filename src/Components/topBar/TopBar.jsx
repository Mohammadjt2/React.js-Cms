import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Mohammadjt2</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">8</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <img src="/images/Mohammadjt2.jpg" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

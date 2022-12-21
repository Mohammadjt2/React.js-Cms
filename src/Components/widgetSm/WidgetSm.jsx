import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../Datas";

const WidgetSm = () => {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">New Join Members</span>
      <ul className="WidgetSmList">
        {newMembers.map((user) => (
          <li key={user.key} className="WidgetSmListItem">
            <img src={user.img} className="WidgetSmImg" />
            <div className="WidgetSmUser">
              <span className="WidgetSmUserName">{user.username}</span>
              <span className="WidgetSmUserTitle">{user.title}</span>
            </div>
            <button className="WidgetSmButton">
              <VisibilityIcon className="WidgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;

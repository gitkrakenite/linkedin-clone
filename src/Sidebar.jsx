import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {" "}
          {user.email[0]}{" "}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      {/*  */}

      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem("reactJs")}
        {recentItem("vueJs")}
        {recentItem("Design")}
        {recentItem("dataStructures")}
        {recentItem("Security")}
        {recentItem("Malware")}
      </div>
    </div>
  );
}

export default Sidebar;

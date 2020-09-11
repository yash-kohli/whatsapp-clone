import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
function SidebarChat({ RoomName, lastmessage }) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{RoomName}</h2>
        <p>{lastmessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;

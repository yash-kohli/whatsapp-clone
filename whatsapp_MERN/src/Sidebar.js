import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://www.pinkvilla.com/files/Avengers%20Endgame%20Leaked%20images%20show%20that%20Iron%20Man%20will%20be%20seen%20in%20SEVERAL%20suits%20%282%29.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutLined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat RoomName="Apes together strong" lastmessage="helloooo.." />
        <SidebarChat RoomName=" together strong" lastmessage="helloooo.." />
        <SidebarChat RoomName="Apes together strong" lastmessage="helloooo.." />
      </div>
    </div>
  );
}

export default Sidebar;

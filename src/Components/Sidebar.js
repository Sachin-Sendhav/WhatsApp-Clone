import React from 'react'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeicon from '@material-ui/icons/DonutLarge'
import Chaticon from '@material-ui/icons/Chat'
import MoreVerticon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import "./Sidebar.css";
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeicon />
                    </IconButton>
                    <IconButton>
                        <Chaticon />
                    </IconButton>
                    <IconButton>
                        <MoreVerticon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat  addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    )
}

export default Sidebar

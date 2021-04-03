import React from 'react'
import { Avatar } from "@material-ui/core"
import DonutLargeicon from '@material-ui/icons/DonutLarge'
import Chaticon from '@material-ui/icons/Chat'
import MoreVerticon from '@material-ui/icons/MoreVert'
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />

                <div className="sidebar__headerRight">
                    <DonutLargeicon />
                    <Chaticon />
                    <MoreVerticon />
                </div>
            </div>
            <div className="sidebar__search">

            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar

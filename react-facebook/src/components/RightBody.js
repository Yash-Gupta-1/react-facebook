import React from 'react'
import './RightBody.css'
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const RightBody = () => {
    return (
        <div className="rightbody">
            <div className="rowDis" style={{ justifyContent: "space-between" }}>
                <p style={{ color: "gray", fontWeight: "500" }}>Contacts</p>
                <div className="rightIcons">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>
            <div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Yash</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Harry</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Golu</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Rajesh</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Kapil</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Ganesh</h3>
                </div>
                <div className="rowDis rightList mt1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Heena</h3>
                </div>
                <div className="rowDis rightList mt1 mb1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h3>Vishwajut</h3>
                </div>
            </div>
        </div >
    )
}

export default RightBody

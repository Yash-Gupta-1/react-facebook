import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Avatar from '@material-ui/core/Avatar';
import SmsIcon from '@material-ui/icons/Sms';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Header = () => {
    return (
        <div className="header">
            <div className="left rowDis">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="Facebook Logo" />
                <div className="searchInput rowDis">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="middle">
                <div className="iconContainer">
                    <HomeOutlinedIcon fontSize="large" />
                </div>
                <div className="iconContainer">
                    <PeopleAltOutlinedIcon fontSize="large" />
                </div>
                <div className="iconContainer">
                    <OndemandVideoOutlinedIcon fontSize="large" />
                </div>
                <div className="iconContainer">
                    <StoreOutlinedIcon fontSize="large" />
                </div>
                <div className="iconContainer">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>
            </div>
            <div className="right rowDis">
                <div className="rowDis avtaar">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <h4>Yash</h4>
                </div>
                .
                <div className="rightIconContainer">
                    <AddIcon fontSize="small" />
                </div>
                <div className="rightIconContainer">
                    <SmsIcon fontSize="small" />
                </div>
                <div className="rightIconContainer">
                    <NotificationsIcon fontSize="small" />
                </div>
                <div className="rightIconContainer">
                    <ArrowDropDownIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Header

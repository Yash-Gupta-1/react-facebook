import React from 'react'
import './LeftBody.css'
import LocalActivityRoundedIcon from '@material-ui/icons/LocalActivityRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupIcon from '@material-ui/icons/Group';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const LeftBody = () => {
    return (
        <div className="leftbody">
            <div className="rowDis leftList mt1">
                <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h3>Yash</h3>
            </div>
            <div className="rowDis leftList mt1">
                <SupervisedUserCircleRoundedIcon />
                <h3>Friends</h3>
            </div>
            <div className="rowDis leftList mt1">
                <LocalOfferIcon />
                <h3>Offers</h3>
            </div>
            <div className="rowDis leftList mt1">
                <GroupIcon />
                <h3>Group</h3>
            </div>
            <div className="rowDis leftList mt1">
                <StorefrontRoundedIcon />
                <h3>Marketplace</h3>
            </div>
            <div className="rowDis leftList mt1">
                <OndemandVideoRoundedIcon />
                <h3>watch</h3>
            </div>
            <div className="rowDis leftList mt1">
                <LocalActivityRoundedIcon />
                <h3>Events</h3>
            </div>
            <div className="rowDis leftList mt1 mb1">
                <ExpandMoreRoundedIcon />
                <h3>See more</h3>
            </div>
        </div>
    )
}

export default LeftBody

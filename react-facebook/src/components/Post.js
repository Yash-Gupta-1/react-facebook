import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ChildCareSharpIcon from '@material-ui/icons/ChildCareSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';

const Post = ({ name, description, img }) => {
    return (
        <div className="post mt3">
            <div className="post__header p1">
                <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <img src={img} alt="post" />
            </div>

            <div className="post__bottom">
                <div className="post__reaction rowDis mb1">
                    <div className="react_icons rowDis">
                        <ThumbUpAltSharpIcon />
                        <ChildCareSharpIcon />
                        <FavoriteSharpIcon />
                        <p>100</p>
                    </div>
                    <div className="comment__section rowDis">
                        <p>80</p>
                        <p>Comments</p>
                    </div>
                </div>

                <hr />

                <div className="post__buttons p1">
                    <div className="postIcon">
                        <ThumbUpAltOutlinedIcon />
                    </div>
                    <div className="postIcon">
                        <ChatBubbleOutlineSharpIcon />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post

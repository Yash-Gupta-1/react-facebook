import React from 'react'
import './FeedBody.css'
import Avatar from '@material-ui/core/Avatar';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import MoodSharpIcon from '@material-ui/icons/MoodSharp';
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import Post from './Post';


const FeedBody = () => {
    return (
        <div className="feedbody mt1">
            <div className="stories">
                <div className="addStory">
                    <img src="https://images.unsplash.com/photo-1624167476077-6866e452519f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-img" />
                    <div className="whiteBg">
                        <div className="addButton">
                            <AddSharpIcon />
                        </div>
                        <h1>Create</h1>
                    </div>
                </div>
                <div className="story">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <img src="https://images.unsplash.com/photo-1624136330903-e910b144a461?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-img" />
                    <h1>Create</h1>
                </div>
                <div className="story">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <img src="https://images.unsplash.com/photo-1624163124907-73a1a69e2780?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-img" />
                    <h1>Create</h1>
                </div>
                <div className="story">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <img src="https://images.unsplash.com/photo-1624147784934-d18a03eb0466?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-img" />
                    <h1>Create</h1>
                </div>
            </div>

            <div className="postBox mt3">
                <div className="boxTop rowDis p1">
                    <Avatar sizes="small" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <div className="boxInput rowDis">
                        <input type="text" placeholder="What's on your mind ? Yash" />
                    </div>
                </div>
                <hr />
                <div className="boxBottom">
                    <div className="boxIcon rowDis">
                        <VideocamSharpIcon />
                        <h3>Videos</h3>
                    </div>
                    <div className="boxIcon rowDis">
                        <PhotoLibrarySharpIcon />
                        <h3>Photos</h3>
                    </div>
                    <div className="boxIcon rowDis">
                        <MoodSharpIcon />
                        <h3>Feeling</h3>
                    </div>
                </div>
            </div>

            <div>
                <Post name="Harish" img="https://images.unsplash.com/photo-1624136330903-e910b144a461?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Golu" img="https://images.unsplash.com/photo-1624163124907-73a1a69e2780?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Henry" img="https://images.unsplash.com/photo-1624147784934-d18a03eb0466?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Gopal" img="https://images.unsplash.com/photo-1624068103429-c227b9073b09?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Heena" img="https://images.unsplash.com/photo-1624167476077-6866e452519f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Jyoti" img="https://images.unsplash.com/photo-1624170614231-558ad5d074d9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Bilal" img="https://images.unsplash.com/photo-1624197813202-518a2034e52f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Harish" img="https://images.unsplash.com/photo-1624124122063-bb94faee311b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Nitish" img="https://images.unsplash.com/photo-1624124122063-bb94faee311b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
                <Post name="Gagan" img="https://images.unsplash.com/photo-1624147784934-d18a03eb0466?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="I like it " />
            </div>

        </div>
    )
}

export default FeedBody

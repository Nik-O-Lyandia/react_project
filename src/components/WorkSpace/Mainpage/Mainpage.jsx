import React from 'react';
import style from './Mainpage.module.css';
import Posts from './Posts/Posts';
import AddPost from './AddPost/AddPost';

function Mainpage(props) {
    return (
        <div>
            <AddPost />
            <h3>Posts</h3>
            <Posts posts={props.state.posts} />
        </div>
    );
}

export default Mainpage;
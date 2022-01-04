import React from 'react';
import style from './Mainpage.module.css';
import Posts from './Posts/Posts';
import AddPost from './AddPost/AddPost';

function Mainpage(props) {
    return (
        <div>
            <AddPost />
            <Posts state={props.state} />
        </div>
    );
}

export default Mainpage;
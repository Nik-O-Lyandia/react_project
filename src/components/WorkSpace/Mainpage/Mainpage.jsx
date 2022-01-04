import React from 'react';
import style from './Mainpage.module.css';
import Posts from './Posts/Posts';

function Mainpage(props) {
    return (
        <Posts state={props.state} />
    );
}

export default Mainpage;
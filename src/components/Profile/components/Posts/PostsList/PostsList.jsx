import React from 'react';
import classes from './PostsList.module.css';
import Post from './components/Post';

const PostsList = () => {
    return (
        <div className={classes.list}>
            <Post id='1'/>
            <Post id='2'/>
            <Post id='3'/>
            <Post id='4'/>
        </div>
    )
}

export default PostsList;
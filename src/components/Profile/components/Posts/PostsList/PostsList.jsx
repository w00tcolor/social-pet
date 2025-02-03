import React from 'react';
import classes from './PostsList.module.css';
import Post from './components/Post';

const PostsList = () => {
    return (
        <div className={classes.list}>
            <Post key={1}/>
            <Post key={2}/>
            <Post key={3}/>
            <Post key={4}/>
        </div>
    )
}

export default PostsList;
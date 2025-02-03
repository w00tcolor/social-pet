import React from 'react';
import classes from './Post.module.css';

const Post = (key) => {
    return (
        <div className={classes.post}>Post №{key}</div>
    )
}

export default Post;
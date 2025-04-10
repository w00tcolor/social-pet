import React from 'react';
import classes from './PostsList.module.css';
import Post from './components/Post';

const PostsList = (props) => {

    let posts = props.posts;
    return (
        <div className={classes.list}>
            {posts.map(p => 
                <Post 
                    id={p.id} 
                    content={p.text} 
                    author={p.author}
                    likesCount={p.likesCount}
                />
            )}
        </div>
    )
}

export default PostsList;
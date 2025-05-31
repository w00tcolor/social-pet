import React from 'react';
import PostsCreateForm from './PostsCreateForm/PostsCreateForm';
import PostsList from './PostsList/PostsList';

const Posts = (props) => {
    return (
        <div className='posts'>
            <PostsCreateForm dispatch={props.dispatch} newPostValue={props.newPostValue}/>
            <PostsList posts={props.posts}/>
        </div>
    )
}

export default Posts;
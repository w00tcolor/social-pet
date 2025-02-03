import React from 'react';
import PostsCreateForm from './PostsCreateForm/PostsCreateForm';
import PostsList from './PostsList/PostsList';

const Posts = () => {
    return (
        <div className='posts'>
            <PostsCreateForm />
            <PostsList />
        </div>
    )
}

export default Posts;
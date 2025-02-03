import React from 'react';
import classes from './PostsCreateForm.module.css';

const PostsCreateForm = () => {
    return (
        <div className={classes.create__form}>
                <textarea name="newPost" ></textarea>
                <button>Опубликовать</button>
        </div>
    )
}

export default PostsCreateForm;
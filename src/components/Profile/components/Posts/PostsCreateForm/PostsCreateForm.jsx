import React from 'react';
import classes from './PostsCreateForm.module.css';

const PostsCreateForm = (props) => {
    
    const value = React.createRef();
    let getPostValue = () => {
        let result = value.current.value; 
        props.addPost(result);
    }
    
    return (
        <div className={classes.create__form}>
                <textarea ref={value} name="newPost" ></textarea>
                <button onClick={getPostValue}>Опубликовать</button>
        </div>
    )
}

export default PostsCreateForm;
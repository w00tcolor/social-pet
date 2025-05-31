import React from 'react';
import classes from './PostsCreateForm.module.css';
import { addPostActionCreator, updateNewPostValueActionCreator } from '../../../../../redux/state';

const PostsCreateForm = (props) => {
    
    const value = React.createRef();
    let getPostValue = () => {
        props.dispatch(addPostActionCreator())
    }

    let onNewPostValueChange = () => {
        let text = value.current.value;
        props.dispatch(updateNewPostValueActionCreator(text));
    } 
    
    return (
        <div className={classes.create__form}>
                <textarea ref={value} name="newPost" onChange={onNewPostValueChange} value={props.newPostValue}></textarea>
                <button onClick={getPostValue}>Опубликовать</button>
        </div>
    )
}

export default PostsCreateForm;
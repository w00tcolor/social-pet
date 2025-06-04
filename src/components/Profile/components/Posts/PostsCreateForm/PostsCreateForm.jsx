import React from 'react';
import classes from './PostsCreateForm.module.css';
import { addPostActionCreator, updateNewPostValueActionCreator } from '../../../../../redux/profile-reducer';
import { TextArea } from '../../../../../styled/components';

const PostsCreateForm = (props) => {
    
    let getPostValue = () => {
        props.dispatch(addPostActionCreator())
    }

    let onNewPostValueChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostValueActionCreator(text));
    } 
    
    return (
        <div className={classes.create__form}>
                <TextArea name="newPost" onChange={onNewPostValueChange} value={props.newPostValue}></TextArea>
                <button onClick={getPostValue}>Опубликовать</button>
        </div>
    )
}

export default PostsCreateForm;
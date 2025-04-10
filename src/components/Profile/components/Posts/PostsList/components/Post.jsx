import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post} id={props.id}>
            <img className={classes.avatar} src="https://steamuserimages-a.akamaihd.net/ugc/1818901417377513828/FE99066B3463CD05423A514CA8A4162DBD103761/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" alt="" />
            <h5>{props.author}</h5>
            <span>{props.content}</span>
            <div>
                <span className={classes.likeBtn}>
                    {props.likesCount} likes
                </span>
            </div>
        </div>
    )
}

export default Post;
import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="https://steamuserimages-a.akamaihd.net/ugc/1818901417377513828/FE99066B3463CD05423A514CA8A4162DBD103761/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false" alt="" />
            Post №{props.id}
            <div>
                <span className={classes.likeBtn}>
                    like
                </span>
            </div>
        </div>
    )
}

export default Post;
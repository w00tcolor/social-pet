import React from 'react';
import classes from './Profile.module.css'
import Hat from './components/Hat/Hat'
import Posts from './components/Posts/Posts';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    

    return (
        <div className={classes.content}>
            <Hat />
            <ProfileInfo />
            <Posts posts={props.state.postsArr} newPostValue={props.state.newPostValue} dispatch={props.dispatch}/>            
        </div>
    );
}

export default Profile;
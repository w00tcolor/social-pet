import React from 'react';
import classes from './Profile.module.css'
import Hat from './components/Hat/Hat'
import Posts from './components/Posts/Posts';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={classes.content}>
            <Hat />
            <ProfileInfo />
            <Posts />            
        </div>
    );
}

export default Profile;
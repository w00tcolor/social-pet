import React from 'react';
import classes from './Profile.module.css'
import Hat from './components/Hat/Hat'
import Posts from './components/Posts/Posts';

const Profile = () => {
    const name = 'Иванов Иван Иванович'
    return (
        <div className={classes.content}>
            <Hat />
            <Posts />
            <div className='info'>
                <img className='info-avatar' src='https://steamuserimages-a.akamaihd.net/ugc/1818901417377513828/FE99066B3463CD05423A514CA8A4162DBD103761/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false' alt='avatar'/>
                <div className='info-content'>
                    <h3 className='info-heading'>{name}</h3>
                    <p className='info-text'>Привет! Меня зовут {name}. �� рыцарь Samurai, известный воин и лучший физически атакующий в мире.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;
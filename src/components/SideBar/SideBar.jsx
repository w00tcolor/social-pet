import React from 'react';
import classes from './SideBar.module.css'

const Sidebar = () => {
    return (
        <nav className={classes.nav}>
            <ul className='app-ul'>
                <li className='app-li'><a href="/profile">Profile</a></li>
                <li className='app-li'><a href="/messenger">Messenger</a></li>
                <li className='app-li'><a href="/feed">Feed</a></li>
                <li className='app-li'><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;
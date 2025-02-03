import React from 'react';
import classes from './SideBar.module.css'

const Sidebar = () => {
    return (
        <nav className={classes.nav}>
            <ul className='app-ul'>
                <li className='app-li'><a href="#">Home</a></li>
                <li className='app-li'><a href="#">About</a></li>
                <li className='app-li'><a href="#">Contact</a></li>
                <li className='app-li'><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;
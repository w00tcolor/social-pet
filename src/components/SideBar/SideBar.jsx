import React from 'react';
import classes from './SideBar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className={classes.nav}>
            <ul className='sidebar-ul'>
                <NavLink to="/profile" className={classes.sidebarLi}>Profile</NavLink>
                <NavLink to="/messenger" className={classes.sidebarLi}>Messenger</NavLink>
                <NavLink to="/feed" className={classes.sidebarLi}>Feed</NavLink>
                <NavLink to="/settings" className={classes.sidebarLi}>Settings</NavLink>
            </ul>
        </nav>
    );
}

export default Sidebar;
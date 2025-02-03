import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src='https://i.pinimg.com/originals/10/60/36/106036f6cf119966cda29fec7873430b.png' alt="logo"/>
        </header>
    );
}

export default Header;
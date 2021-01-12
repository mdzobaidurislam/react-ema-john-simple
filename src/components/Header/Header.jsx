import React from 'react';
import logo from '../../images/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} alt="" />
            <p className="hello">hello</p>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>
    )
}


export default Header;
import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="container">
        <div className="nav-left">
        <Link to='/'>
        <h1 className='logo-header'>MOM MADE</h1>
        </Link>
        </div>
        <div className='nav-center'>
        </div>
        <div className='nav-right'>
        <div className='login-btn'>
        <Link to='/login'>
        <h1 className='btn-login' > Login</h1>
        </Link>
        </div>
        <div className='sign-btn'>
        <Link to='/signup'>
        <h1 className='btn-sign'> Sign up</h1>
        </Link>
        </div>
        </div>
        </div>
    );
};

export default Header;
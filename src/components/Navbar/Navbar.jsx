import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../public/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='container mx-auto flex items-center bg-slate-100'>
            <Link className='logo flex-1' to='/'><img src={logo} alt="" /></Link>
            <div>
                <Link className='link-item text-xl' to='/'>Home</Link>
                <Link className='link-item text-xl' to='/cart'>Cart</Link>
                <Link className='link-item text-xl' to='/about'>about us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
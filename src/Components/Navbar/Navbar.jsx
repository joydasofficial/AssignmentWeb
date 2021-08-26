import React from 'react'
import NavLinks from './Navlinks';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='desktop_navigation'>
            <div className='nav_container'>
                <div className="logo">
                    {/* <img src={''} alt="Design Labs" /> */}
                    <h2><NavLink to='/'>Design Lab</NavLink></h2>
                </div>
                <NavLinks />
            </div>          
        </nav>
    )
}

export default Navbar

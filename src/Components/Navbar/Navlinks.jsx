import React from 'react'
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {

    return (
        <ul className="nav-links">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/' >Home</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/about' >About</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/services' >Services</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink exact activeClassName='active_menu_item' to='/portfolio' >Portfolio</NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>

                <NavLink exact activeClassName='active_menu_item' to='/contact' >Contact</NavLink>
            </li>
        </ul>

    );
}

export default NavLinks;
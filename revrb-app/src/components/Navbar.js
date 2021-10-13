import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
// import { Button } from './Button.js'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); // reverse the click state on click

    const closeMenu = () => setClick(false); // switch the click state to 'false' on the clicking the nav-link


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>ReVRB</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? 'X' : '| |'}
                    </div>
                    <ul className={`nav-menu ${click ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/explore" className="nav-links" onClick={closeMenu}>Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/podcast" className="nav-links" onClick={closeMenu}>Podcast</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/radio" className="nav-links" onClick={closeMenu}>Radio</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
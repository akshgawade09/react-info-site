import React from 'react';
import Logo from '../logo.svg';

function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={Logo} className='nav-image' />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <NavMenu />
        </div>
    );
};

export default Header;
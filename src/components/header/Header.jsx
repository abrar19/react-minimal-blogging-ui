import React from 'react';
import './header.css'
import headerNature from './img/headerNature.jpg'

const Header = () => {
    return (
        <div className='header'>
          <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
          </div>
          <img className='headerImg' src={headerNature} alt="" />
        </div>
    );
}

export default Header;

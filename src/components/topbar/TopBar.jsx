import React from 'react';
import './topBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import DP from './img/abrar-gray.jpg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <div className='top'>
            <div className='topLeft'>
                <FontAwesomeIcon className='topIcon' icon={ faFacebookSquare } />
                <FontAwesomeIcon className='topIcon' icon={ faInstagramSquare } />
                <FontAwesomeIcon className='topIcon' icon={ faTwitterSquare } />
                <FontAwesomeIcon className='topIcon' icon={ faPinterestSquare } />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={DP} alt='' className='topImg'/>
                <FontAwesomeIcon className='topSearchIcon' icon={faMagnifyingGlass}/>
            </div>
        </div>
    );
}

export default TopBar;

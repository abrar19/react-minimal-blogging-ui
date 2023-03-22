import React from 'react';
import './topBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import DP from './img/abrar-gray.jpg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TopBar = ({userLoggedIn}) => {
    const user = userLoggedIn;
    
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
                    <li className="topListItem"><Link to="/" className='linkStyle'>HOME</Link></li>
                    <li className="topListItem"><Link to="/about" className='linkStyle'>ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" className='linkStyle'>CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className='linkStyle'>WRITE</Link></li>
                    { user && <li className="topListItem"><Link to="/logout" className='linkStyle'>LOGOUT</Link></li> }
                </ul>
            </div>
            <div className="topRight">
                { user ? 
                        <img src={DP} alt='' className='topImg'/> : <ul className='topList'>
                            <li className='topListItem'><Link to="/login" className='linkStyle'>LOGIN</Link></li>
                            <li className='topListItem'><Link to="/register" className='linkStyle'>REGISTER</Link></li></ul>
                }
                <FontAwesomeIcon className='topSearchIcon' icon={faMagnifyingGlass}/>
            </div>
        </div>
    );
}

export default TopBar;

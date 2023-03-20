import React from 'react';
import './sidebar.css'
import SideDP from './img/abrar-gray.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={SideDP} alt="" className='sidebarImg'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit architecto iure porro saepe voluptates corrupti a laborum.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <FontAwesomeIcon className='sidebarIcon' icon={ faFacebookSquare } />
                    <FontAwesomeIcon className='sidebarIcon' icon={ faInstagramSquare } />
                    <FontAwesomeIcon className='sidebarIcon' icon={ faTwitterSquare } />
                    <FontAwesomeIcon className='sidebarIcon' icon={ faPinterestSquare } />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

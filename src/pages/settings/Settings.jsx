import React from 'react';
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import settingsImg from './img/settingsImg.jpg'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={settingsImg} alt="" />
                        <label htmlFor="fileInput"><FontAwesomeIcon icon={faCircleUser} className='settingsPPIcon'/></label>
                        <input type="file" id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Abrar' />
                    <label>Email</label>
                    <input type="email" placeholder='abrar@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;

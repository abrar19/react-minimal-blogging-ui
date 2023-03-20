import React from 'react';
import './write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import writeImg from './img/writeImg.jpg'

const Write = () => {
    return (
        <div className='write'>
            <img src={writeImg} alt="" className='writeImg'/>
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className='writeIcon'/>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
}

export default Write;

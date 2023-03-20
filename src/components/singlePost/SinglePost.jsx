import React from 'react';
import './singlePost.css'
import postImg1 from './img/blog1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={postImg1} alt="" className='singlePostImg'/>
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet?
                    <div className="singlePostEdit">
                        <FontAwesomeIcon className='singlePostEditIcon' icon={ faPenToSquare } />
                        <FontAwesomeIcon className='singlePostEditIcon' icon={ faTrashCan } />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Abrar</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex ullam quae quibusdam sint, animi id temporibus perspiciatis! Velit iusto porro expedita ipsam beatae dignissimos dicta nesciunt rem, possimus repellendus!
                </p>
            </div>
        </div>
    );
}

export default SinglePost;

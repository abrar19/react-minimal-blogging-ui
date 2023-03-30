import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../post/Post';
import './posts.css';

const Posts = () => {
    return (
        <div className='posts'>
            <Link className='postsLink' to="/post/a"><Post/></Link>
            <Link className='postsLink' to="/post/a"><Post/></Link>
            <Link className='postsLink' to="/post/a"><Post/></Link>
            <Link className='postsLink' to="/post/a"><Post/></Link>
        </div>
    );
}

export default Posts;

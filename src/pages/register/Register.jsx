import React from 'react';
import './register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" placeholder='Enter your Username...' />
                <label>Email</label>
                <input type="email" placeholder='Enter your Email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your Password...' />
                <button className='registerBtn'>Register</button>
            </form>
            <button className='registerLoginBtn'><Link to="/login">Login</Link></button>
        </div>
    );
}

export default Register;

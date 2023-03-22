import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder='Enter your Email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your Password...' />
                <button className='loginBtn'>Login</button>
            </form>
            <button className='loginRegisterBtn'><Link to="/register">Register</Link></button>
        </div>
    );
}

export default Login;

import React from 'react';
import './home.css'
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <div className='home'>
                <Posts/>
                <Sidebar/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Sheard/Navbar/Navbar';
import Footer from '../../Components/Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
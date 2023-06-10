// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-16'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
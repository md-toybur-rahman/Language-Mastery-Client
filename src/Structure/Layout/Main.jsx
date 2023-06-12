// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const handleDark = () => {
        
    }
    return (
        <div className='max-w-[1440px] mx-auto px-16 relative'>
            <div className=" sticky top-2 -ml-[56px] z-20">
                <input onClick={handleDark()} type="checkbox" className="toggle" checked={false} />
            </div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
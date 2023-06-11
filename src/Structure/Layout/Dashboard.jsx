// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Dashboard/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";





const Dashboard = () => {
    
    return (
        <div className='max-w-[1440px] mx-auto px-16'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )

};

export default Dashboard;
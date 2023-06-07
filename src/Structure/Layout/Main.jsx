import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <h1>This is main layout</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
// import React from 'react';

import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Dashboard/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";





const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        // <div>
        //     <Navbar></Navbar>
        //     <Outlet></Outlet>
        //     <Footer></Footer>
        // </div>
        <div className='max-w-[1440px] mx-auto px-16'>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {
                        !isAdmin && !isInstructor ?
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="/">HOME</Link>
                                <Link className='flex items-center bg-[#1BABAF] py-4 justify-center font-bold text-md mb-5 text-white' to="/dashboard">MY SELECTED CLASSES <span className='text-lg'> +{cart.length}</span></Link>
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="payment">MY ENROLLED CLASSES</Link>
                            </ul>:
                            ''
                    }
                    {
                        isAdmin ?
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="/">HOME</Link>
                                <Link className='flex items-center bg-[#1BABAF] py-4 justify-center font-bold text-md mb-5 text-white' to="/dashboard">MANAGE USERS</Link>
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="manage_classes">MANAGE CLASSES</Link>
                            </ul>:
                            ''
                    }
                    {
                        isInstructor ?
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="/">HOME</Link>
                                <Link className='flex items-center bg-[#1BABAF] py-4 justify-center font-bold text-md mb-5 text-white' to="/dashboard">Instructor<span className='text-lg'> +{cart.length}</span></Link>
                                <Link className="bg-[#1BABAF] py-4 text-center font-bold text-md mb-5 text-white" to="payment">MY ENROLLED CLASSES</Link>
                            </ul>:
                            ''
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

};

export default Dashboard;
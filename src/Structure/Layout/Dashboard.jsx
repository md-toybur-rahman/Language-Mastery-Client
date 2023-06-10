// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const cart = useCart();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" name="" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    
                         <div>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </div> 
                        <div>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary">+{cart?.length}</span>
                            </NavLink></li>
                        </div>
                    
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
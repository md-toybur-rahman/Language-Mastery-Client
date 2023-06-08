import React from 'react';
import { Link } from "react-router-dom";
import { SlLocationPin, SlScreenSmartphone, SlEnvolope } from "react-icons/sl";
import { FaFacebookF, FaTwitter, FaSkype, FaSearch } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";


const Navbar = () => {
    const navItem = <div className='flex items-center gap-5 font-semibold'>
        <Link>HOME</Link>
        <Link>INSTRUCTORS</Link>
        <Link>CLASSES</Link>
        <Link>DASHBOARD</Link>
        <FaSearch></FaSearch>
    </div>
    return (
        // TODO: responsive
        <div>
            <div className='flex items-center justify-between border-b-2 py-2'>
                <div className='flex items-center gap-3'>
                    <span className='flex items-center gap-2'><SlLocationPin className='text-[#1BABAF]'></SlLocationPin> Dhaka, Bangladesh</span>
                    <span className='flex items-center gap-2'><SlScreenSmartphone className='text-[#1BABAF]'></SlScreenSmartphone> +88012-3456-7890</span>
                    <span className='flex items-center gap-2'><SlEnvolope className='text-[#1BABAF]'></SlEnvolope> languagemastery@gmail.com</span>
                </div>
                <div className='flex items-center gap-4'>
                    <GrLinkedinOption className='text-gray-400 hover:text-[#1BABAF]'></GrLinkedinOption>
                    <FaFacebookF className='text-gray-400 hover:text-[#1BABAF]'></FaFacebookF>
                    <FaTwitter className='text-gray-400 hover:text-[#1BABAF]'></FaTwitter>
                    <FaSkype className='text-gray-400 hover:text-[#1BABAF]'></FaSkype>
                </div>
            </div>
            {/* TODO: nav position fixed in top */}
            <nav className='flex items-center justify-between py-5'>
                <div>
                    <h1 className='text-3xl'><span className='font-bold'>Language</span> Mastery</h1>
                </div>
                <div>
                    {
                        navItem
                    }
                </div>
                <div>
                    <button className='bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link to='/login'>Login</Link></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
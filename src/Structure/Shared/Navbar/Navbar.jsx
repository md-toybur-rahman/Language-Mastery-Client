import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { SlLocationPin, SlScreenSmartphone, SlEnvolope } from "react-icons/sl";
import { FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { AuthContext } from '../../../Providers/AuthProvider';
import useCart from '../../../hooks/useCart';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [menu, setMenu] = useState(false)
    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }
    console.log(user);
    const navItem = <div className='flex items-center gap-8 font-semibold'>
        <Link to="/">HOME</Link>
        <Link to="/instructors">INSTRUCTORS</Link>
        <Link to="/classes">CLASSES</Link>
        <Link className='flex items-center' to="/dashboard">DASHBOARD <span className='text-[#1BABAF] text-lg'>+{cart.length}</span></Link>
    </div>
    const responsiveNavItem = <div className='flex flex-col items-center gap-8 font-semibold'>
        <Link to="/">HOME</Link>
        <Link to="/instructors">INSTRUCTORS</Link>
        <Link to="/classes">CLASSES</Link>
        <Link className='flex items-center' to="/dashboard">DASHBOARD <span className='text-[#1BABAF] text-lg'>+{cart.length}</span></Link>
    </div>
    return (
        // TODO: responsive and Active NavLink
        <div>
            <div className='md:flex items-center justify-between border-b-2 py-2 hidden'>
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
                <div className='text-2xl md:hidden'>
                    <label className="swap swap-rotate">
                        <input type="checkbox" />

                        {
                            !menu ?
                                <MdMenu onClick={() => setMenu(!menu)}></MdMenu>

                                : <MdClose onClick={() => setMenu(!menu)}></MdClose>
                        }
                    </label>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[40px]' src="https://i.ibb.co/g62PGPf/New-Project.png" alt="" />
                    <h1 className='text-3xl hidden md:block'><span className='font-bold'>Language</span> Mastery</h1>
                </div>
                <div className='hidden md:block'>
                    {
                        navItem
                    }
                </div>
                {
                    user ?
                        <div className='flex items-center gap-7'>
                            <img className='rounded-full w-12 h-12' src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className='hidden md:block bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link>Logout</Link></button>
                        </div>
                        : <div><button className='hidden md:block bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link to='/login'>Login</Link></button></div>
                }
            </nav>


            <nav className={`${menu ? 'absolute top-16 left-0 flex flex-col gap-3 font-bold text-[16px] py-5 px-10 bg-sky-200 duration-300 z-10' : 'absolute z-10 top-16 -left-80 flex flex-col gap-3 font-bold text-[16px] py-5 px-10 bg-sky-200 duration-300'} `}>
                <div>
                    {
                        responsiveNavItem
                    }
                </div>
                {
                    user ?
                        <div className='flex items-center my-3'>
                            <button onClick={handleLogOut} className='bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link>Logout</Link></button>
                        </div>
                        : <div className='my-3'><button className=' bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link to='/login'>Login</Link></button></div>
                }
            </nav>

        </div>
    );
};

export default Navbar;
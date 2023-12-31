
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { SlLocationPin, SlScreenSmartphone, SlEnvolope } from "react-icons/sl";
import { FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AuthContext } from '../../../../Providers/AuthProvider';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    console.log(user);
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
                <div className='flex items-center gap-3'>
                    <img className='w-[40px]' src="https://i.ibb.co/g62PGPf/New-Project.png" alt="" />
                    <h1 className='text-3xl hidden md:block'><span className='font-bold'>Language</span> Mastery</h1>
                </div>
                {
                    user ?
                        <div className='flex items-center gap-7'>
                            <img className='hidden md:block rounded-full w-12 h-12' src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className='block bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link>Logout</Link></button>
                        </div>
                        : <div><button className='
                         bg-[#1BABAF] px-7 py-2 font-semibold rounded-3xl'><Link to='/login'>Login</Link></button></div>
                }
            </nav>
        </div>
    );
};

export default Navbar;
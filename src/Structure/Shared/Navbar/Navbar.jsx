import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
    SlLocationPin,
    SlScreenSmartphone,
    SlEnvolope,
} from "react-icons/sl";

import {
    FaFacebookF,
    FaTwitter,
    FaSkype,
    FaUserCircle,
} from "react-icons/fa";

import { GrLinkedinOption } from "react-icons/gr";
import { MdMenu, MdClose } from "react-icons/md";

import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [cart] = useCart();
    const [menu, setMenu] = useState(false);

    const handleLogOut = () => {
        logOut().then(() => {
            localStorage.removeItem("access_token");
        }).catch(error => {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message
            })
        });
    };

    const navLink =
        "relative text-slate-300 font-medium transition duration-300 hover:text-amber-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full";

    const activeLink =
        "text-amber-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-amber-400";

    const navItems = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${navLink} ${isActive ? activeLink : ""}`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/instructors"
                className={({ isActive }) =>
                    `${navLink} ${isActive ? activeLink : ""}`
                }
            >
                Instructors
            </NavLink>

            <NavLink
                to="/classes"
                className={({ isActive }) =>
                    `${navLink} ${isActive ? activeLink : ""}`
                }
            >
                Classes
            </NavLink>

            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `${navLink} flex items-center gap-2 ${isActive ? activeLink : ""
                    }`
                }
            >
                Dashboard

                <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-slate-900">
                    {cart.length}
                </span>
            </NavLink>
        </>
    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl">

            {/* Top Bar */}

            <div className="hidden border-b border-slate-800 bg-slate-950/90 lg:block">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                    <div className="flex items-center gap-8 text-sm text-slate-400">

                        <span className="flex items-center gap-2">
                            <SlLocationPin className="text-amber-400" />
                            Dhaka, Bangladesh
                        </span>

                        <span className="flex items-center gap-2">
                            <SlScreenSmartphone className="text-amber-400" />
                            +88012-3456-7890
                        </span>

                        <span className="flex items-center gap-2">
                            <SlEnvolope className="text-amber-400" />
                            languagemastery@gmail.com
                        </span>

                    </div>

                    <div className="flex items-center gap-4 text-slate-500">

                        <a
                            href="#"
                            className="transition hover:text-amber-400"
                        >
                            <GrLinkedinOption />
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-amber-400"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-amber-400"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-amber-400"
                        >
                            <FaSkype />
                        </a>

                    </div>

                </div>

            </div>

            {/* Main Navbar */}

            <nav className="border-b border-slate-800 bg-slate-950/90">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Mobile Menu */}

                    <button
                        onClick={() => setMenu(!menu)}
                        className="text-3xl text-white lg:hidden"
                    >
                        {menu ? <MdClose /> : <MdMenu />}
                    </button>

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >
                        <img
                            src="./logo.png"
                            alt=""
                            className="w-44"
                        />

                    </Link>

                    {/* Desktop Menu */}

                    <div className="hidden items-center gap-10 lg:flex">
                        {navItems}
                    </div>
                    {/* Right Side */}

                    <div className="hidden lg:flex items-center gap-5">

                        {user ? (
                            <>
                                <div
                                    className="group relative"
                                    title={user?.displayName}
                                >
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt=""
                                            className="h-12 w-12 rounded-full border-2 border-slate-700 object-cover transition duration-300 group-hover:border-amber-400"
                                        />
                                    ) : (
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-900 text-2xl text-amber-400">
                                            <FaUserCircle />
                                        </div>
                                    )}

                                    <div className="pointer-events-none absolute -bottom-11 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                                        {user?.displayName || "User"}
                                    </div>
                                </div>

                                <button
                                    onClick={handleLogOut}
                                    className="rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}

            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${menu
                    ? "max-h-[500px] border-b border-slate-800 bg-slate-950"
                    : "max-h-0"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">

                    <div className="flex flex-col gap-6 text-lg">
                        {navItems}
                    </div>

                    <div className="mt-8 border-t border-slate-800 pt-6">

                        {user ? (
                            <div className="flex flex-col gap-5">

                                <div className="flex items-center gap-4">

                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt=""
                                            className="h-14 w-14 rounded-full border-2 border-amber-400 object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-400 bg-slate-900 text-3xl text-amber-400">
                                            <FaUserCircle />
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {user?.displayName || "User"}
                                        </h3>

                                        <p className="text-sm text-slate-400">
                                            {user?.email}
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={handleLogOut}
                                    className="rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 py-3 font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:brightness-110"
                                >
                                    Logout
                                </button>

                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="block rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 py-3 text-center font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:brightness-110"
                            >
                                Login
                            </Link>
                        )}

                    </div>
                </div>
            </div>

        </header>
    );
};

export default Navbar;
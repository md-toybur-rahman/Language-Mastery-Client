import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaUserGraduate,
    FaBookOpen,
    FaChalkboardTeacher,
    FaPlusCircle,
    FaBars,
} from "react-icons/fa";
import Footer from "../Shared/Footer/Footer";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Pages/ScrollToTop/ScrollToTop";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const location = useLocation();

    const menuClass = ({ isActive }) =>
        `flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all duration-300 ${isActive
            ? "bg-gradient-to-r from-cyan-300 to-amber-400 text-slate-950 shadow-lg shadow-cyan-500/20"
            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300 hover:translate-x-2"
        }`;

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* Background Glow */}

            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]"></div>
            <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-teal-500/10 blur-[140px]"></div>

            <div className="relative max-w-[1600px] mx-auto">
                <ScrollToTop />
                <Navbar />

                <div className="drawer lg:drawer-open">

                    <input
                        id="dashboard-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />

                    {/* Content */}

                    <div className="drawer-content">

                        {/* Mobile Button */}

                        <div className="p-5 lg:hidden">

                            <label
                                htmlFor="dashboard-drawer"
                                className="btn border border-slate-700 bg-slate-900 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950"
                            >
                                <FaBars />
                                Dashboard Menu
                            </label>

                        </div>

                        <div className="p-6 lg:p-10">

                            <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

                                <h1 className="text-4xl font-black text-white">
                                    Dashboard
                                </h1>

                                <p className="mt-3 text-slate-400">
                                    Manage your courses, students and account from one place.
                                </p>

                            </div>

                            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl min-h-[650px] overflow-hidden">

                                <Outlet />

                            </div>

                        </div>

                    </div>

                    {/* Sidebar */}

                    <div className="drawer-side z-50">

                        <label
                            htmlFor="dashboard-drawer"
                            className="drawer-overlay"
                        ></label>

                        <aside className="min-h-full w-80 border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl">

                            {/* Navigation */}

                            <div className="space-y-3 p-6">

                                <NavLink
                                    to="/"
                                    className={menuClass}
                                >
                                    <FaHome />
                                    Home
                                </NavLink>

                                {/* Student */}

                                {!isAdmin && !isInstructor && (
                                    <>

                                        <NavLink
                                            end
                                            to="/dashboard"
                                            className={menuClass}
                                        // className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all duration-300 ${({ isActive }) => isActive? " bg-gradient-to-r from-cyan-300 to-amber-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                                        //     : " text-slate-300 hover:bg-slate-800 hover:text-cyan-300 hover:translate-x-2"
                                        //     }`}
                                        >
                                            <FaBookOpen />
                                            My Selected Classes

                                            <span className={`ml-auto rounded-full bg-cyan-400 px-3 py-1 text-sm font-bold text-slate-950 ${cart?.length < 1 ? 'hidden' : ''}`}>
                                                {cart.length}
                                            </span>

                                        </NavLink>

                                        <NavLink
                                            to="/dashboard/enrolled_classes"
                                            className={menuClass}
                                        >
                                            <FaUserGraduate />
                                            My Enrolled Classes
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/payment_history"
                                            className={menuClass}
                                        >
                                            <FaUserGraduate />
                                            Payment History
                                        </NavLink>

                                    </>
                                )}

                                {/* Admin */}

                                {isAdmin && (
                                    <>

                                        <NavLink
                                            end
                                            to="/dashboard"
                                            className={menuClass}
                                        >
                                            <FaUsers />
                                            Manage Users
                                        </NavLink>

                                        <NavLink
                                            to="/dashboard/manage_classes"
                                            className={menuClass}
                                        >
                                            <FaBookOpen />
                                            Manage Classes
                                        </NavLink>

                                        <NavLink
                                            to="/dashboard/add_instructor"
                                            className={menuClass}
                                        >
                                            <FaChalkboardTeacher />
                                            Add Instructor
                                        </NavLink>

                                    </>
                                )}

                                {/* Instructor */}

                                {isInstructor && (
                                    <>

                                        <NavLink
                                            end
                                            to="/dashboard"
                                            className={menuClass}
                                        >
                                            <FaBookOpen />
                                            My Classes
                                        </NavLink>

                                        <NavLink
                                            to="/dashboard/add_class"
                                            className={menuClass}
                                        >
                                            <FaPlusCircle />
                                            Add New Class
                                        </NavLink>

                                    </>
                                )}

                            </div>

                            {/* Bottom */}

                            <div className="absolute bottom-0 w-full border-t border-slate-800 p-6">

                                <div className="rounded-2xl bg-gradient-to-r from-cyan-500/15 to-teal-500/15 p-5">

                                    <h3 className="font-bold text-cyan-300">
                                        Language Mastery
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Learn languages with expert instructors and
                                        build your future with confidence.
                                    </p>

                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

                <Footer />

            </div>

        </div>
    );
};

export default Dashboard;
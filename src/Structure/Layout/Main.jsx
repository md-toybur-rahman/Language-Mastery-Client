// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import './BackgroundColor.css'

const Main = () => {
    return (
        <div>
            <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl animate-pulse"></div>
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>

                {/* Floating Letters */}
                <span className="absolute left-[8%] top-[12%] text-7xl font-black text-white/5 animate-float">
                    A
                </span>

                <span className="absolute left-[18%] top-[60%] text-6xl font-black text-amber-400/5 animate-float-slow">
                    Ü
                </span>

                <span className="absolute right-[12%] top-[18%] text-8xl font-black text-white/5 animate-float-delay">
                    あ
                </span>

                <span className="absolute right-[22%] bottom-[15%] text-7xl font-black text-blue-400/5 animate-float">
                    한
                </span>

                <span className="absolute left-[45%] top-[30%] text-9xl font-black text-amber-300/5 animate-float-slow">
                    Ж
                </span>

                <span className="absolute left-[60%] bottom-[20%] text-7xl font-black text-white/5 animate-float-delay">
                    أ
                </span>
            </div>
            <div className="mx-auto max-w-[1600px] px-4 md:px-8 xl:px-16">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
import React from 'react';
import { FaGlobeAsia } from "react-icons/fa";

const CardLoader = () => {
    return (
        <div>
            <div className="relative flex flex-col items-center">

                {/* Spinner */}

                <div className="relative">

                    <div className="h-28 w-28 animate-spin rounded-full border-[6px] border-slate-700 border-t-cyan-400"></div>

                    <div className="absolute inset-0 flex items-center justify-center">

                        <FaGlobeAsia className="text-4xl text-amber-400" />

                    </div>

                </div>

                {/* Title */}

                <h2 className="mt-8 text-2xl font-bold tracking-wide text-white">

                    Language Mastery

                </h2>

                <p className="mt-2 text-slate-400">

                    Preparing your learning experience...

                </p>

                {/* Loading Dots */}

                <div className="mt-8 flex gap-3">

                    <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"></span>

                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-amber-400"
                        style={{ animationDelay: ".15s" }}
                    ></span>

                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"
                        style={{ animationDelay: ".3s" }}
                    ></span>

                </div>

            </div>
        </div>
    );
};

export default CardLoader;
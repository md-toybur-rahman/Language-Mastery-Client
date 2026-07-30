import { FaGlobeAsia } from "react-icons/fa";

const FullScreenLoader = () => {

    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950">

            {/* Background Glow */}

            <div className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

            {/* Content */}

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

export default FullScreenLoader;
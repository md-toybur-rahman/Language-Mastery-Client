import { Link, useRouteError } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import useHelmet from "../../../hooks/useHelmet";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
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

            {useHelmet("404 Not Found")}

            {/* Background Glow */}

            <div className="absolute inset-0">

                <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

                <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"></div>

                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]"></div>

            </div>

            {/* Card */}

            <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950/90 p-10 text-center shadow-2xl backdrop-blur-xl">

                {/* 404 Image */}

                <div className="flex justify-center">

                    <div className="relative mb-8 flex justify-center">

                        <div className="absolute inset-0 flex items-center justify-center">

                            <div className="h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"></div>

                        </div>

                        <h1 className="relative bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-[140px] font-black leading-none text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] md:text-[180px]">

                            404

                        </h1>

                    </div>

                </div>

                {/* Badge */}

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

                    Error 404

                </span>

                {/* Title */}

                <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">

                    Page

                    <span className="bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-transparent">
                        {" "}Not Found
                    </span>

                </h1>

                {/* Description */}

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">

                    {error?.statusText ||
                        error?.message ||
                        "The page you're looking for doesn't exist or has been moved."}

                </p>

                {/* Funny Math */}

                <div className="mt-8">

                    <h2 className="text-2xl font-bold text-slate-300">

                        100 + 200 =

                        <span className="ml-3 bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-5xl text-transparent">
                            404
                        </span>

                    </h2>

                </div>

                {/* Buttons */}

                <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                    <Link to="/">

                        <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-amber-500 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30">

                            <FaHome />

                            Back Home

                        </button>

                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-8 py-4 font-bold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-300"
                    >

                        <FaArrowLeft />

                        Go Back

                    </button>

                </div>

            </div>

        </section>
    );
};

export default ErrorPage;
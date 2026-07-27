import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaArrowRight,
} from "react-icons/fa";

import {
    MdEmail,
    MdLocationOn,
    MdPhone,
} from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative mt-32 overflow-hidden border-t border-slate-800 bg-slate-950">

            {/* Glow */}

            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"></div>
            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-4">

                            <img
                                src="/logo.png"
                                className="w-16"
                                alt=""
                            />

                            <div>

                                <h2 className="text-3xl font-black text-white">
                                    Language
                                </h2>

                                <h3 className="text-2xl font-black text-amber-400">
                                    Mastery
                                </h3>

                            </div>

                        </div>

                        <p className="mt-6 leading-8 text-slate-400">
                            Learn languages with confidence through
                            professional courses, expert instructors,
                            interactive lessons and a premium learning
                            experience.
                        </p>

                        <div className="mt-8 flex gap-4">

                            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950">
                                <FaFacebookF />
                            </a>

                            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950">
                                <FaLinkedinIn />
                            </a>

                            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950">
                                <FaGithub />
                            </a>

                            <a className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950">
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="mb-7 text-xl font-bold text-white">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4">

                            <Link className="flex items-center gap-3 text-slate-400 transition hover:text-amber-300">
                                <FaArrowRight className="text-xs" />
                                Home
                            </Link>

                            <Link className="flex items-center gap-3 text-slate-400 transition hover:text-amber-300">
                                <FaArrowRight className="text-xs" />
                                Classes
                            </Link>

                            <Link className="flex items-center gap-3 text-slate-400 transition hover:text-amber-300">
                                <FaArrowRight className="text-xs" />
                                Instructors
                            </Link>

                            <Link className="flex items-center gap-3 text-slate-400 transition hover:text-amber-300">
                                <FaArrowRight className="text-xs" />
                                Dashboard
                            </Link>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-7 text-xl font-bold text-white">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <div className="flex gap-4">

                                <div className="mt-1 text-xl text-amber-400">
                                    <MdLocationOn />
                                </div>

                                <p className="leading-7 text-slate-400">
                                    Dhaka, Bangladesh
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <div className="mt-1 text-xl text-amber-400">
                                    <MdPhone />
                                </div>

                                <p className="text-slate-400">
                                    +880 1234 567890
                                </p>

                            </div>

                            <div className="flex gap-4">

                                <div className="mt-1 text-xl text-amber-400">
                                    <MdEmail />
                                </div>

                                <p className="text-slate-400">
                                    support@languagemastery.com
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Newsletter */}

                    <div>

                        <h3 className="mb-7 text-xl font-bold text-white">
                            Newsletter
                        </h3>

                        <p className="mb-6 leading-7 text-slate-400">
                            Subscribe to receive learning tips, course updates
                            and educational resources.
                        </p>

                        <div className="space-y-4">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-amber-400"
                            />

                            <button
                                className="w-full rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-4 font-bold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 border-t border-slate-800 pt-8">

                    <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

                        <p className="text-slate-500">
                            © {new Date().getFullYear()} Language Mastery. All rights reserved.
                        </p>

                        <div className="flex gap-8 text-sm text-slate-500">

                            <a className="transition hover:text-amber-300">
                                Privacy Policy
                            </a>

                            <a className="transition hover:text-amber-300">
                                Terms & Conditions
                            </a>

                            <a className="transition hover:text-amber-300">
                                Support
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
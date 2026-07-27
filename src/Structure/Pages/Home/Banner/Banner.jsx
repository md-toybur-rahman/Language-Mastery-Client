import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const slides = [
    {
        image: "https://i.ibb.co/G0mSfJD/pexels-pixabay-261895-1.jpg",
        title: "Master Languages With Confidence",
        subtitle:
            "Interactive classes, expert instructors and immersive learning experiences designed to help you speak fluently.",
    },
    {
        image: "https://i.ibb.co/6yYkKyn/pexels-filipe-sabino-2065490-1.jpg",
        title: "Learn From Industry Experts",
        subtitle:
            "Join live sessions, practical lessons and personalised guidance from experienced language teachers.",
    },
    {
        image: "https://i.ibb.co/C8jqHWL/pexels-olia-danilevich-5088180-1.jpg",
        title: "Study Anywhere, Anytime",
        subtitle:
            "Flexible online learning with modern courses, quizzes and engaging classroom activities.",
    },
    {
        image: "https://i.ibb.co/Dwt5zVf/pexels-andrea-piacquadio-3776165-1.jpg",
        title: "Build Your Global Future",
        subtitle:
            "Develop communication skills that open doors to international education and career opportunities.",
    },
];

const Banner = () => {
    return (
        <section className="relative mt-8 overflow-hidden rounded-[36px]">

            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                transitionTime={900}
                showStatus={false}
                showThumbs={false}
                showIndicators
                showArrows={false}
                swipeable
                emulateTouch
            >

                {slides.map((slide, index) => (

                    <div
                        key={index}
                        className="relative h-[650px]"
                    >

                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20"></div>

                        <div className="absolute inset-0 flex items-center">

                            <div className="mx-auto flex max-w-7xl px-8">

                                <div className="max-w-3xl">

                                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-amber-300">
                                        Premium Language Learning
                                    </span>

                                    <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
                                        {slide.subtitle}
                                    </p>

                                    <div className="mt-12 flex flex-wrap gap-5">

                                        <Link
                                            to="/classes"
                                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 px-8 py-4 font-bold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/30"
                                        >
                                            Explore Classes
                                            <FaArrowRight />
                                        </Link>

                                        <Link
                                            to="/instructors"
                                            className="inline-flex items-center gap-3 rounded-full border border-slate-600 bg-slate-900/60 px-8 py-4 font-semibold uppercase tracking-[0.18em] text-white backdrop-blur transition duration-300 hover:border-amber-400 hover:text-amber-300"
                                        >
                                            <FaPlay />
                                            Meet Instructors
                                        </Link>

                                    </div>
                                    {/* Statistics */}

                                    <div className="mt-16 grid max-w-2xl grid-cols-3 gap-5">

                                        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur">

                                            <h2 className="text-4xl font-black text-amber-400">
                                                20K+
                                            </h2>

                                            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                                                Students
                                            </p>

                                        </div>

                                        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur">

                                            <h2 className="text-4xl font-black text-amber-400">
                                                50+
                                            </h2>

                                            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                                                Courses
                                            </p>

                                        </div>

                                        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur">

                                            <h2 className="text-4xl font-black text-amber-400">
                                                98%
                                            </h2>

                                            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                                                Success Rate
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </Carousel>

            {/* Bottom Blur */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

            {/* Floating Glow */}

            <div className="absolute left-10 top-10 h-52 w-52 animate-pulse rounded-full bg-amber-400/10 blur-3xl"></div>

            <div className="absolute bottom-10 right-10 h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl"></div>
        </section>
    );
};

export default Banner;
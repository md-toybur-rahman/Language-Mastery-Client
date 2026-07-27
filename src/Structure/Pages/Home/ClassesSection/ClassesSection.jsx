import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import { FaGraduationCap } from "react-icons/fa";

const ClassesSection = () => {
    const [loadedClasses, setLoadedClasses] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort(
                    (a, b) => b.total_student - a.total_student
                );

                setLoadedClasses(sorted);
                setClasses(sorted.slice(0, 6));
            });
    }, []);

    return (
        <section className="relative mt-28 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="relative">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

                        <FaGraduationCap />

                        Popular Courses

                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

                        Learn The World's

                        <span className="bg-gradient-to-r from-cyan-300 to-yellow-500 bg-clip-text text-transparent">

                            {" "}Top Languages

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

                        Choose from our most popular language courses taught by
                        experienced instructors. Build confidence through live
                        classes, practical lessons and interactive learning.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {classes.map((singleClass) => (

                        <ClassesCard
                            key={singleClass._id}
                            singleClass={singleClass}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
};

export default ClassesSection;
import { useEffect, useState } from "react";
import { FaArrowRight, FaChalkboardTeacher } from "react-icons/fa";
import InstructorCard from "./InstructorCard";
import CardLoader from "../../../Shared/CardLoader/CardLoader";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const InstructorSection = () => {
    const [axiosSecure] = useAxios();
    const { data: instructors = [], isLoading } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
            const res = await axiosSecure.get('/instructors');
            return res.data;
        }
    })

    if (isLoading) {
        return <div className="min-h-[500px] flex items-center justify-center"><CardLoader /></div>
    }

    return (

        <section className="relative mt-32 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"></div>

            <div className="relative">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

                        <FaChalkboardTeacher />

                        Expert Instructors

                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

                        Meet Our

                        <span className="bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-transparent">

                            {" "}Professional Teachers

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

                        Learn from experienced language instructors who have
                        helped thousands of students achieve fluency through
                        interactive and practical learning.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {instructors?.slice(0, 5).map((instructor) => (

                        <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        />

                    ))}
                    <NavLink to="/instructors" className="flex items-center justify-center">
                        <button
                            className={`inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] transition duration-300 bg-gradient-to-r from-cyan-300 to-amber-400 text-slate-950 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30`}
                        >
                            See All Instructors
                            <FaArrowRight />
                        </button>
                    </NavLink>

                </div>

            </div>

        </section>

    );
};

export default InstructorSection;
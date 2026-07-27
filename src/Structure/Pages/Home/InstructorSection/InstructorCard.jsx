import {
    FaEnvelope,
    FaGlobe,
    FaUserGraduate,
    FaArrowRight,
} from "react-icons/fa";

const InstructorCard = ({ instructor }) => {

    const {
        language_name,
        country_name,
        instructor_name,
        email,
        number_of_students,
        photo,
    } = instructor;

    return (

        <div
            className="group overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-amber-500/10"
        >

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={photo}
                    alt={instructor_name}
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">

                    Instructor

                </div>

            </div>

            {/* Content */}

            <div className="p-7">

                <h2 className="text-3xl font-black text-white">

                    {instructor_name}

                </h2>

                <p className="mt-2 text-amber-300">

                    {language_name} ({country_name})

                </p>

                <div className="mt-8 space-y-5">
                    {/* Email */}

                    <div className="flex items-center gap-4">

                        <div className="rounded-full bg-amber-400/10 p-3 text-amber-400">
                            <FaEnvelope />
                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Email
                            </p>

                            <p className="text-sm text-white break-all">
                                {email}
                            </p>

                        </div>

                    </div>

                    {/* Language */}

                    <div className="flex items-center gap-4">

                        <div className="rounded-full bg-amber-400/10 p-3 text-amber-400">
                            <FaGlobe />
                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Teaching Language
                            </p>

                            <p className="font-medium text-white">
                                {language_name} ({country_name})
                            </p>

                        </div>

                    </div>

                    {/* Students */}

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                        <div className="mb-3 flex items-center gap-3 text-amber-400">

                            <FaUserGraduate />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                                Total Students
                            </span>

                        </div>

                        <h3 className="text-4xl font-black text-white">
                            {number_of_students}
                        </h3>

                    </div>

                </div>
                {/* Button */}

                <div className="mt-8">

                    <button
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
                    >

                        View Profile

                        <FaArrowRight />

                    </button>

                </div>

            </div>

        </div>

    );

};

export default InstructorCard;
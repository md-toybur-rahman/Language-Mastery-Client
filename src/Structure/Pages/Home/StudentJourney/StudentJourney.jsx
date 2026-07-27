import {
    FaSearch,
    FaUserPlus,
    FaChalkboardTeacher,
    FaBookOpen,
    FaChartLine,
    FaAward,
    FaGraduationCap,
} from "react-icons/fa";


const journeyData = [
    {
        id: 1,
        number: "01",
        title: "Choose Your Language",
        description:
            "Browse our collection of language courses and select the one that matches your interests and career goals.",
        icon: <FaSearch />,
    },
    {
        id: 2,
        number: "02",
        title: "Enroll Instantly",
        description:
            "Complete your registration in a few simple steps and secure your seat in the upcoming batch.",
        icon: <FaUserPlus />,
    },
    {
        id: 3,
        number: "03",
        title: "Attend Live Classes",
        description:
            "Participate in interactive online classes with experienced instructors and real-time discussions.",
        icon: <FaChalkboardTeacher />,
    },
    {
        id: 4,
        number: "04",
        title: "Practice Daily",
        description:
            "Improve your speaking, listening, reading and writing through assignments and practical exercises.",
        icon: <FaBookOpen />,
    },
    {
        id: 5,
        number: "05",
        title: "Track Your Progress",
        description:
            "Monitor your learning journey with quizzes, assessments and performance reports.",
        icon: <FaChartLine />,
    },
    {
        id: 6,
        number: "06",
        title: "Earn Your Certificate",
        description:
            "Successfully complete the course and receive a verified certificate to showcase your achievement.",
        icon: <FaAward />,
    },
];


const StudentJourney = () => {
    return (
        <section className="relative mt-32 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"></div>


            <div className="relative">

                {/* Heading */}

                <div className="mb-20 pt-5 text-center">

                    <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

                        <FaGraduationCap />

                        Learning Process

                    </span>


                    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

                        Your Journey With

                        <span className="bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-transparent">
                            {" "}Language Mastery
                        </span>

                    </h2>


                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                        Follow our simple learning process and transform your
                        language skills step by step with expert guidance.
                    </p>

                </div>



                {/* Timeline */}

                <div className="relative mx-auto max-w-5xl">

                    {/* Line */}

                    <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-300 via-amber-400 to-transparent lg:block"></div>


                    <div className="space-y-10">

                        {
                            journeyData.map((item, index) => (

                                <div
                                    key={item.id}
                                    className={`relative flex flex-col gap-8 lg:flex-row ${index % 2 !== 0
                                            ? "lg:flex-row-reverse"
                                            : ""
                                        }`}
                                >

                                    {/* Card */}

                                    <div className="w-full lg:w-1/2">

                                        <div className="group rounded-[28px] border border-slate-800 bg-slate-950 p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/10">


                                            <div className="flex items-center gap-5">

                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-amber-400 text-2xl text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-500 group-hover:scale-110">

                                                    {item.icon}

                                                </div>


                                                <div>

                                                    <span className="text-sm font-bold tracking-widest text-amber-300">
                                                        STEP {item.number}
                                                    </span>

                                                    <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-cyan-300">
                                                        {item.title}
                                                    </h3>

                                                </div>

                                            </div>


                                            <p className="mt-6 leading-8 text-slate-400">
                                                {item.description}
                                            </p>


                                            <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 transition-all duration-500 group-hover:w-full"></div>


                                        </div>

                                    </div>


                                    {/* Center Number */}

                                    <div className="absolute left-1/2 top-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-cyan-300 to-amber-400 font-bold text-slate-950 lg:flex">

                                        {item.number}

                                    </div>


                                </div>

                            ))
                        }

                    </div>

                </div>


            </div>

        </section>
    );
};


export default StudentJourney;
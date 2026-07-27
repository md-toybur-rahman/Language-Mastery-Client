import {
    FaUserGraduate,
    FaCertificate,
    FaGlobeEurope,
    FaHeadset,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaGraduationCap,
} from "react-icons/fa";

const features = [
    {
        id: 1,
        icon: <FaChalkboardTeacher />,
        title: "Expert Instructors",
        description:
            "Learn from experienced teachers with years of professional language training.",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        title: "Interactive Live Classes",
        description:
            "Engaging online classes with real-time interaction, quizzes and practical sessions.",
    },
    {
        id: 3,
        icon: <FaCertificate />,
        title: "Verified Certificate",
        description:
            "Receive a professional certificate after successfully completing your course.",
    },
    {
        id: 4,
        icon: <FaGlobeEurope />,
        title: "Multiple Languages",
        description:
            "Choose from the world's most popular languages and learn at your own pace.",
    },
    {
        id: 5,
        icon: <FaUserGraduate />,
        title: "Student-Focused Learning",
        description:
            "Structured curriculum designed to maximize speaking, listening, reading and writing skills.",
    },
    {
        id: 6,
        icon: <FaHeadset />,
        title: "Continuous Support",
        description:
            "Our support team and instructors are always ready to help throughout your learning journey.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative mt-32 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"></div>

            <div className="relative">

                {/* Heading */}

                <div className="mb-20 text-center pt-5">

                    <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">

                        <FaGraduationCap />

                        Why Choose Us

                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

                        Why Learn With

                        <span className="bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-transparent">

                            {" "}Language Mastery

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

                        We combine expert instructors, interactive learning,
                        modern technology and personalised support to make
                        language learning enjoyable, effective and accessible
                        for everyone.

                    </p>

                </div>

                {/* Feature Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (

                        <div
                            key={feature.id}
                            className="group relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950 p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/10"
                        >

                            {/* Glow */}

                            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/20"></div>

                            {/* Icon */}

                            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-amber-400 text-3xl text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                                {feature.icon}

                            </div>

                            {/* Title */}

                            <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-amber-300">

                                {feature.title}

                            </h3>

                            {/* Description */}

                            <p className="mt-5 leading-8 text-slate-400">

                                {feature.description}

                            </p>

                            {/* Bottom Border */}

                            <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-300 to-amber-400 transition-all duration-500 group-hover:w-full"></div>

                        </div>

                    ))}
                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;
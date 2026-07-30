import {
    FaUsers,
    FaChair,
    FaMoneyBillWave,
    FaGlobeAsia,
    FaUserTie
} from "react-icons/fa";

const MyClassCard = ({ singleClass }) => {
    const {
        language_name,
        country_name,
        instructor_name,
        total_student,
        available_seats,
        total_seats,
        price,
        photo,
        status,
        feedback,
    } = singleClass;

    const enrolled = Number(total_student);
    const total = Number(total_seats);
    const available = Number(available_seats);

    const progress =
        ((total_student || 0) /
            (total_seats || 1)) *
        100;
    const income =
        Number(price) *
        Number(total_student);

    const statusColor =

        status === "approved"

            ? "bg-emerald-500/20 text-emerald-400"

            : status === "denied"

                ? "bg-red-500/20 text-red-400"

                : "bg-amber-500/20 text-amber-400";

    const badge =

        status === "approved"

            ? "bg-emerald-500/20 text-emerald-400"

            : status === "denied"

                ? "bg-red-500/20 text-red-400"

                : "bg-amber-500/20 text-amber-400";



    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/20">

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={photo}
                    alt={language_name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-gradient-to-br from-cyan-300 to-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
                    {country_name}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-900">
                    ৳ {price}
                </span>
            </div>

            {/* Body */}
            <div className="p-6">

                <h2 className="mb-2 text-2xl font-bold text-white">
                    {language_name}
                </h2>

                <div className="mb-6 flex items-center gap-2 text-slate-300">
                    <FaUserTie className="text-amber-400" />
                    {instructor_name}
                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-xl bg-slate-800 p-4">
                        <FaUsers className="mb-2 text-xl text-cyan-400" />
                        <p className="text-xs text-slate-400">
                            Students
                        </p>
                        <h3 className="text-xl font-bold text-white">
                            {enrolled}
                        </h3>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                        <FaChair className="mb-2 text-xl text-amber-400" />
                        <p className="text-xs text-slate-400">
                            Seats Left
                        </p>
                        <h3 className="text-xl font-bold text-white">
                            {available}
                        </h3>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                        <FaGlobeAsia className="mb-2 text-xl text-emerald-400" />
                        <p className="text-xs text-slate-400">
                            Total Seats
                        </p>
                        <h3 className="text-xl font-bold text-white">
                            {total}
                        </h3>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">
                        <FaMoneyBillWave className="mb-2 text-xl text-pink-400" />
                        <p className="text-xs text-slate-400">
                            Fee
                        </p>
                        <h3 className="text-xl font-bold text-white">
                            ৳ {price}
                        </h3>
                    </div>

                </div>

                {/* Progress */}

                <div className="mt-7">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="text-sm text-slate-400">
                            Seat Occupancy
                        </span>

                        <span className="font-semibold text-cyan-400">
                            {progress.toFixed(0)}%
                        </span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-700">

                        <div
                            style={{ width: `${progress}%` }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                        />

                    </div>

                </div>

                {/* Status */}

                <div className="mt-6">

                    <div className="flex items-center justify-between">

                        <span
                            className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor}`}
                        >

                            {status?.toUpperCase()}

                        </span>

                        {/* <span className="font-bold text-emerald-400">

                            Income: ৳ {income}

                        </span> */}

                    </div>

                    <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">

                        <p className="text-sm font-semibold text-cyan-400">

                            Admin Feedback

                        </p>

                        <p className="mt-2 text-sm text-slate-300">

                            {feedback || "No feedback from admin."}

                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyClassCard;
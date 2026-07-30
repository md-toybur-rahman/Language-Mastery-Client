import {
    FaUserTie,
    FaMoneyBillWave,
    FaCalendarAlt,
    FaCheckCircle,
    FaFingerprint,
    FaPlayCircle,
} from "react-icons/fa";

const EnrolledClassCard = ({ item }) => {

    const {
        language_name,
        country_name,
        instructor_name,
        photo,
        price,
        paymentTime,
        transactionId,
    } = item;

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

                <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-4 py-1 text-sm font-bold text-white flex items-center gap-2">
                    <FaCheckCircle />
                    Enrolled
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

                {/* Information */}

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-xl bg-slate-800 p-4">

                        <FaMoneyBillWave className="mb-2 text-xl text-emerald-400" />

                        <p className="text-xs text-slate-400">
                            Paid
                        </p>

                        <h3 className="text-xl font-bold text-white">
                            ৳ {price}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-slate-800 p-4">

                        <FaCalendarAlt className="mb-2 text-xl text-cyan-400" />

                        <p className="text-xs text-slate-400">
                            Purchased
                        </p>

                        <h3 className="text-sm font-bold text-white">
                            {new Date(paymentTime).toLocaleDateString()}
                        </h3>

                    </div>

                    <div className="col-span-2 rounded-xl bg-slate-800 p-4">

                        <FaFingerprint className="mb-2 text-xl text-amber-400" />

                        <p className="text-xs text-slate-400">
                            Transaction ID
                        </p>

                        <h3 className="mt-1 break-all text-sm font-semibold text-cyan-400">
                            {transactionId}
                        </h3>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between">

                    <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">

                        Lifetime Access

                    </span>

                    <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 px-5 py-2 font-semibold text-slate-900 transition hover:scale-105">

                        <FaPlayCircle />

                        Continue

                    </button>

                </div>

            </div>

        </div>
    );
};

export default EnrolledClassCard;
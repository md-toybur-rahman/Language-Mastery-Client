import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
    FaCheckCircle,
    FaChalkboardTeacher,
    FaGlobeAsia,
    FaUsers,
    FaMoneyBillWave,
    FaChair,
} from "react-icons/fa";
import { AuthContext } from "../../../../Providers/AuthProvider";

const AdminClassesCard = ({ singleClass, refetch }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        language_name,
        country_name,
        instructor_name,
        total_student,
        available_seats,
        total_seats,
        photo,
        price,
        _id,
        email
    } = singleClass;

    const handleApprove = async () => {
        const res = await fetch(
            `https://language-mastery.onrender.com/approve_class/${singleClass._id}`,
            {
                method: "PATCH",
            }
        );
        const data = await res.json();
        if (data.modifiedCount) {
            Swal.fire({
                icon: "success",
                title: "Class Approved",
            }).then(() => refetch())
        }
    };

    const handleDeny = async () => {

        const { value: feedback } = await Swal.fire({

            title: "Reason of Deny",

            input: "textarea",

            inputPlaceholder:
                "Why is this class denied?",

            showCancelButton: true,

        });

        if (!feedback) return;

        const res = await fetch(

            `https://language-mastery.onrender.com/deny_class/${singleClass._id}`,

            {

                method: "PATCH",

                headers: {

                    "content-type": "application/json",

                },

                body: JSON.stringify({

                    feedback,

                }),

            }

        );

        const data = await res.json();

        if (data.modifiedCount) {

            Swal.fire({

                icon: "success",

                title: "Class Denied",

            }).then(refetch())

        }

    };

    const handleFeedback = async () => {

        const { value: feedback } = await Swal.fire({

            title: "Write Feedback",

            input: "textarea",

            inputPlaceholder:
                "Write feedback for instructor...",

            showCancelButton: true,

        });

        if (!feedback) return;

        const res = await fetch(

            `https://language-mastery.onrender.com/class_feedback/${singleClass._id}`,

            {

                method: "PATCH",

                headers: {

                    "content-type": "application/json",

                },

                body: JSON.stringify({

                    feedback,

                }),

            }

        );

        const data = await res.json();

        if (data.modifiedCount) {

            Swal.fire({

                icon: "success",

                title: "Feedback Saved",

            });

        }

    };


    return (

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <figure className="relative">

                <img
                    className="w-[100px] h-[80px] pt-5 absolute top-0 left-3"
                    src={photo}
                    alt=""
                />

                <img
                    src="https://i.ibb.co/ZV9VFyP/kenny-eliason-1-a-A2-Fadydc-unsplash-2.jpg"
                    alt=""
                />

                {/* Status Badge */}

                <div className="absolute right-4 bottom-4">

                    <span
                        className={`rounded-full px-4 py-2 text-sm font-bold ${singleClass.status === "approved"
                            ? "bg-emerald-500 text-white"
                            : singleClass.status === "denied"
                                ? "bg-red-500 text-white"
                                : "bg-amber-400 text-slate-900"
                            }`}
                    >
                        {singleClass.status?.toUpperCase()}
                    </span>

                </div>

            </figure>

            <div className="space-y-5 p-6">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        {language_name}

                    </h2>

                    <p className="mt-1 flex items-center gap-2 text-amber-400">

                        <FaGlobeAsia />

                        {country_name}

                    </p>

                </div>

                <div className="space-y-3 text-slate-300">

                    <p className="flex items-center gap-3">

                        <FaChalkboardTeacher className="text-amber-400" />

                        {instructor_name}

                    </p>

                    <p className="flex items-center gap-3">

                        <FaUsers className="text-amber-400" />

                        {total_student} Students

                    </p>

                    <p className="flex items-center gap-3">

                        <FaChair className="text-amber-400" />

                        {available_seats} Seats Left

                    </p>

                    <p className="flex items-center gap-3">

                        <FaMoneyBillWave className="text-amber-400" />

                        ৳ {price}

                    </p>

                </div>

                <button
                    disabled={singleClass?.status !== "pending"}
                    onClick={handleApprove}
                    className={`btn flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]`}
                >

                    <FaCheckCircle />

                    Approve Class

                </button>
                <div className="flex items-center justify-between">
                    <button

                        onClick={handleFeedback}

                        className="btn btn-info bg-gradient-to-br from-cyan-600 to-cyan-100"

                    >

                        Feedback

                    </button>
                    <button
                        disabled={singleClass?.status !== "pending"}
                        className={`btn btn-error bg-gradient-to-br from-red-500 to-red-300`}
                        onClick={handleDeny}
                    >
                        Deny
                    </button>
                </div>


            </div>

        </div>

    );
};

export default AdminClassesCard;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
    FaArrowRight,
    FaGlobe,
    FaUserGraduate,
    FaChair,
    FaMoneyBillWave,
} from "react-icons/fa";

import { AuthContext } from "../../../../Providers/AuthProvider";
import useCart from "../../../../hooks/useCart";

const ClassesCard = ({ singleClass }) => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [cart, refetch] = useCart();

    const {
        language_name,
        country_name,
        instructor_name,
        total_student,
        available_seats,
        photo,
        price,
    } = singleClass;

    const handleAdmit = (singleClass) => {

        if (!user) {
            navigate("/login");
            return;
        }

        const {
            language_name,
            country_name,
            instructor_name,
            available_seats,
            price,
            photo,
            _id,
        } = singleClass;

        const isExist = cart.find(
            (item) => item.language_name === language_name
        );

        if (isExist) {

            Swal.fire({
                icon: "warning",
                title: "Already Added",
                text: "This class is already in your cart.",
                confirmButtonColor: "#f59e0b",
            });

            return;
        }

        const cartItem = {
            class_id: _id,
            language_name,
            country_name,
            instructor_name,
            available_seats,
            price,
            photo,
            user_email: user.email,
        };

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
            .then((res) => res.json())
            .then(() => {

                refetch();

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Class Added Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });

            });

    };

    return (

        <div
            className={`group overflow-hidden rounded-[28px] border transition duration-500 hover:-translate-y-2
            ${available_seats === 0
                    ? "border-red-500/40 bg-red-950/20"
                    : "border-slate-800 bg-slate-950 hover:border-amber-300"
                } shadow-xl`}
        >
            {/* Image */}

            <div className="relative overflow-hidden bg-slate-900">

                <img
                    src="https://i.ibb.co/ZV9VFyP/kenny-eliason-1-a-A2-Fadydc-unsplash-2.jpg"
                    alt=""
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute left-6 top-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white/20 bg-slate-800 p-1 shadow-2xl backdrop-blur-md">

                    <img
                        src={photo}
                        alt={language_name}
                        className="h-full w-full rounded-full object-cover object-center transition duration-500 group-hover:scale-110"
                    />

                </div>

                {available_seats === 0 && (
                    <div className="absolute right-5 top-5 rounded-full bg-red-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                        Full
                    </div>
                )}

            </div>

            {/* Body */}

            <div className="p-7">

                <h2 className="text-2xl font-bold text-white">

                    {language_name}

                    <span className="ml-2 text-amber-300">
                        ({country_name})
                    </span>

                </h2>

                <div className="mt-7 space-y-5">

                    <div className="flex items-center gap-4">

                        <div className="rounded-full bg-amber-300/10 p-3 text-amber-300">
                            <FaGlobe />
                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Country
                            </p>

                            <p className="font-medium text-white">
                                {country_name}
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <div className="rounded-full bg-amber-300/10 p-3 text-amber-300">
                            <FaUserGraduate />
                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                Instructor
                            </p>

                            <p className="font-medium text-white">
                                {instructor_name}
                            </p>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">

                            <div className="mb-2 flex items-center gap-2 text-amber-300">
                                <FaChair />
                                <span className="text-xs uppercase tracking-[0.15em]">
                                    Seats
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {available_seats}
                            </h3>

                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">

                            <div className="mb-2 flex items-center gap-2 text-amber-300">
                                <FaUserGraduate />
                                <span className="text-xs uppercase tracking-[0.15em]">
                                    Students
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {total_student}
                            </h3>

                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-between">

                        <div>

                            <p className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                                <FaMoneyBillWave className="text-amber-300" />
                                Course Fee
                            </p>

                            <h2 className="text-4xl font-black text-amber-300">
                                ৳{price}
                            </h2>

                        </div>

                        <button
                            disabled={available_seats === 0}
                            onClick={() => handleAdmit(singleClass)}
                            className={`inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] transition duration-300
                            ${available_seats === 0
                                    ? "cursor-not-allowed bg-slate-700 text-slate-400"
                                    : "bg-gradient-to-r from-cyan-300 to-amber-400 text-slate-950 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30"
                                }`}
                        >
                            {available_seats === 0 ? "Class Full" : "Admit Now"}

                            {available_seats !== 0 && <FaArrowRight />}
                        </button>

                    </div>

                </div>

            </div>
        </div>

    );
};

export default ClassesCard;
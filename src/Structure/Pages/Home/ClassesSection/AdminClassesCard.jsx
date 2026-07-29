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

    const handleApprove = () => {

        if (!user) {
            return navigate("/login");
        }

        const approveItem = {
            language_name,
            country_name,
            instructor_name,
            total_student,
            available_seats,
            total_seats,
            photo,
            price,
            email
        };

        fetch("http://localhost:5000/classes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(approveItem),
        })
            .then((res) => res.json())
            .then(() => {

                fetch(`http://localhost:5000/instructors_requirements/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {

                        refetch();

                        Swal.fire({
                            icon: "success",
                            title: "Class Approved Successfully",
                            background: "#0f172a",
                            color: "#fff",
                            timer: 1700,
                            showConfirmButton: false,
                        });

                    });

            });
    };

    return (

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="relative">

                <img
                    src="https://i.ibb.co/ZV9VFyP/kenny-eliason-1-a-A2-Fadydc-unsplash-2.jpg"
                    className="h-56 w-full object-cover"
                    alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <img
                    src={photo}
                    alt=""
                    className="absolute left-6 top-6 h-20 w-20 rounded-2xl border-2 border-slate-700 bg-white object-cover p-1 shadow-xl"
                />

            </div>

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
                    onClick={handleApprove}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02]"
                >

                    <FaCheckCircle />

                    Approve Class

                </button>

            </div>

        </div>

    );
};

export default AdminClassesCard;
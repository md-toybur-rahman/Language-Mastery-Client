import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    FaGlobeAsia,
    FaFlag,
    FaUserTie,
    FaUsers,
    FaChair,
    FaMoneyBillWave,
    FaCloudUploadAlt,
    FaPlusCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddedClass = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        reset,
        handleSubmit,
        watch,
    } = useForm();

    const [loading, setLoading] = useState(false);

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const image = watch("photo");

    const preview =
        image && image.length > 0
            ? URL.createObjectURL(image[0])
            : null;

    const onSubmit = async (data) => {
        try {

            setLoading(true);

            const formData = new FormData();
            formData.append("image", data.photo[0]);

            const imgRes = await fetch(image_hosting_url, {
                method: "POST",
                body: formData,
            });

            const imgData = await imgRes.json();

            if (imgData.success) {

                const imageURL = imgData.data.display_url;

                const {
                    language_name,
                    country_name,
                    price,
                    instructor_name,
                    total_student,
                    available_seats,
                    total_seats,
                } = data;
                const email = user?.email

                const newItem = {
                    language_name,
                    country_name,
                    instructor_name,
                    total_student: Number(total_student),
                    available_seats: Number(available_seats),
                    total_seats: Number(total_seats),
                    price: Number(price),
                    photo: imageURL,
                    email,
                    status: "pending",
                    feedback: ""
                };

                const res = await fetch(
                    "https://language-mastery.onrender.com/instructors_requirements",
                    {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(newItem),
                    }
                );

                const result = await res.json();

                if (result.acknowledged) {

                    reset();

                    Swal.fire({
                        icon: "success",
                        title: "Class Submitted",
                        text: "Waiting for Admin Approval",
                        background: "#0f172a",
                        color: "#fff",
                        confirmButtonColor: "#06b6d4",
                    }).then(() => navigate("/dashboard"));

                }
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mx-auto max-w-7xl">

            <div className="mb-10">

                <h1 className="text-4xl font-black text-white">
                    Add New Class
                </h1>

                <p className="mt-2 text-slate-400">
                    Submit a new language course for admin approval.
                </p>

            </div>

            <div className="grid gap-10 lg:grid-cols-3">

                {/* FORM */}

                <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-6 md:grid-cols-2"
                    >

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaGlobeAsia className="text-amber-400" />

                                Language

                            </label>

                            <input
                                {...register("language_name")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="English"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaFlag className="text-amber-400" />

                                Country

                            </label>

                            <input
                                {...register("country_name")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="United Kingdom"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaUserTie className="text-amber-400" />

                                Instructor

                            </label>

                            <input
                                {...register("instructor_name")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="John Smith"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaMoneyBillWave className="text-amber-400" />

                                Price

                            </label>

                            <input
                                type="number"
                                {...register("price")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="5000"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaUsers className="text-amber-400" />

                                Total Students

                            </label>

                            <input
                                type="number"
                                {...register("total_student")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="0"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaChair className="text-amber-400" />

                                Available Seats

                            </label>

                            <input
                                type="number"
                                {...register("available_seats")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="30"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaChair className="text-amber-400" />

                                Total Seats

                            </label>

                            <input
                                type="number"
                                {...register("total_seats")}
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                                placeholder="30"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaCloudUploadAlt className="text-amber-400" />

                                Course Image

                            </label>

                            <input
                                type="file"
                                {...register("photo")}
                                className="file-input w-full border-slate-700 bg-slate-950"
                            />

                        </div>

                        <div className="md:col-span-2">

                            <button
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-amber-400 py-4 font-bold text-slate-950 transition hover:scale-[1.02]"
                            >

                                <FaPlusCircle />

                                {loading
                                    ? "Uploading..."
                                    : "Submit Class"}

                            </button>

                        </div>

                    </form>

                </div>

                {/* PREVIEW */}

                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">

                    <h2 className="mb-6 text-center text-2xl font-bold text-white">

                        Image Preview

                    </h2>

                    <div className="flex h-80 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950">

                        {preview ? (

                            <img
                                src={preview}
                                className="h-full w-full object-cover"
                                alt=""
                            />

                        ) : (

                            <div className="text-center">

                                <FaCloudUploadAlt className="mx-auto mb-5 text-6xl text-amber-400/50" />

                                <p className="text-slate-500">

                                    Upload a class image

                                </p>

                            </div>

                        )}

                    </div>

                    <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5">

                        <h3 className="font-bold text-cyan-300">

                            Note

                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">

                            Your class will remain pending until it is
                            reviewed and approved by an administrator.

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AddedClass;
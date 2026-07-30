import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    FaUserTie,
    FaGlobeAsia,
    FaFlag,
    FaUsers,
    FaBookOpen,
    FaEnvelope,
    FaCloudUploadAlt,
    FaPlusCircle,
} from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddedInstructor = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
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

            const imageRes = await fetch(image_hosting_url, {
                method: "POST",
                body: formData,
            });

            const imageData = await imageRes.json();

            if (imageData.success) {

                const imageURL = imageData.data.display_url;

                const newInstructor = {
                    language_name: data.language_name,
                    country_name: data.country_name,
                    instructor_name: data.instructor_name,
                    email: data.email,
                    number_of_students: Number(data.number_of_students),
                    taken_total_classes: Number(data.taken_total_classes),
                    photo: imageURL,
                };

                const res = await fetch(
                    "https://language-mastery.onrender.com/instructors",
                    {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(newInstructor),
                    }
                );

                const result = await res.json();

                if (result.acknowledged) {

                    reset();

                    Swal.fire({
                        icon: "success",
                        title: "Instructor Added Successfully",
                        text: "The instructor has been added to the database.",
                        background: "#0f172a",
                        color: "#fff",
                        confirmButtonColor: "#06b6d4",
                    }).then(() => {
                        navigate("/dashboard/add_instructor");
                    });

                }
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mx-auto max-w-7xl">

            {/* Header */}

            <div className="mb-10">

                <h1 className="text-4xl font-black text-white">
                    Add Instructor
                </h1>

                <p className="mt-2 text-slate-400">
                    Register a new instructor to the Language Mastery platform.
                </p>

            </div>

            <div className="grid gap-10 lg:grid-cols-3">

                {/* Form */}

                <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-6 md:grid-cols-2"
                    >

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaUserTie className="text-amber-400" />

                                Instructor Name

                            </label>

                            <input
                                {...register("instructor_name")}
                                placeholder="John Smith"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaEnvelope className="text-amber-400" />

                                Email Address

                            </label>

                            <input
                                type="email"
                                {...register("email")}
                                placeholder="john@email.com"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaGlobeAsia className="text-amber-400" />

                                Language

                            </label>

                            <input
                                {...register("language_name")}
                                placeholder="English"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaFlag className="text-amber-400" />

                                Country

                            </label>

                            <input
                                {...register("country_name")}
                                placeholder="United Kingdom"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaUsers className="text-amber-400" />

                                Students

                            </label>

                            <input
                                type="number"
                                {...register("number_of_students")}
                                placeholder="250"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaBookOpen className="text-amber-400" />

                                Classes Taken

                            </label>

                            <input
                                type="number"
                                {...register("taken_total_classes")}
                                placeholder="12"
                                className="input w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                        <div className="md:col-span-2">

                            <label className="mb-2 flex items-center gap-2 text-slate-300">

                                <FaCloudUploadAlt className="text-amber-400" />

                                Instructor Photo

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
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-4 font-bold text-slate-950 transition hover:scale-[1.02]"
                            >

                                <FaPlusCircle />

                                {loading
                                    ? "Uploading..."
                                    : "Add Instructor"}

                            </button>

                        </div>

                    </form>

                </div>

                {/* Preview */}

                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">

                    <h2 className="mb-6 text-center text-2xl font-bold text-white">

                        Photo Preview

                    </h2>

                    <div className="flex h-80 items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-slate-700 bg-slate-950">

                        {preview ? (

                            <img
                                src={preview}
                                alt=""
                                className="h-full w-full object-cover"
                            />

                        ) : (

                            <div className="text-center">

                                <FaCloudUploadAlt className="mx-auto mb-5 text-6xl text-amber-400/40" />

                                <p className="text-slate-500">
                                    Upload Instructor Image
                                </p>

                            </div>

                        )}

                    </div>

                    <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5">

                        <h3 className="font-bold text-cyan-300">
                            Information
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            Instructor information will immediately appear in
                            the instructor section after submission.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AddedInstructor;
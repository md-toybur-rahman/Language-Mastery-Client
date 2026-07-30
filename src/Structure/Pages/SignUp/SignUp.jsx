import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    FaGoogle,
    FaGraduationCap,
    FaUser,
    FaEnvelope,
    FaLock,
    FaCamera,
} from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../../Providers/AuthProvider";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const SignUp = () => {

    const { googleLogin, createUser, updateUserProfile, signIn } =
        useContext(AuthContext);

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [previewImage, setPreviewImage] = useState(null);
    const handleImagePreview = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const [passwordError, setPasswordError] = useState("");

    const onSubmit = async (data) => {

        const {
            name,
            email,
            password,
            confirm_password,
            photo,
        } = data;

        if (password !== confirm_password) {
            setPasswordError("Passwords do not match.");
            return;
        }

        setPasswordError("");

        const formData = new FormData();

        formData.append("image", photo[0]);

        fetch(image_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {

                if (result.success) {

                    const imageURL = result.data.display_url;

                    createUser(email, password)
                        .then(() => {

                            updateUserProfile(name, imageURL)
                                .then(() => {

                                    const user = {
                                        name,
                                        email,
                                        type: "student",
                                    };

                                    fetch("https://language-mastery.onrender.com/users", {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                        },
                                        body: JSON.stringify(user),
                                    });

                                    signIn(email, password)
                                        .then(async (result) => {

                                            const currentUser = {
                                                email: result.user.email
                                            }

                                            const res = await fetch("https://language-mastery.onrender.com/jwt", {
                                                method: "POST",
                                                headers: {
                                                    "content-type": "application/json"
                                                },
                                                body: JSON.stringify(currentUser)
                                            })

                                            const data = await res.json();

                                            localStorage.setItem("access_token", data.token);

                                            navigate(from, { replace: true })

                                        })

                                });

                        });

                }

            });

    };

    const handleGoogle = async () => {
        try {
            const result = await googleLogin();

            // Save new user to MongoDB if first login
            if (result._tokenResponse.isNewUser) {
                const { displayName, email } = result.user;

                const user = {
                    name: displayName,
                    email,
                    type: "student",
                };

                await fetch("https://language-mastery.onrender.com/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
            }

            // Request JWT from your server
            const currentUser = {
                email: result.user.email,
            };

            const jwtRes = await fetch("https://language-mastery.onrender.com/jwt", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
            });

            const jwtData = await jwtRes.json();

            // Save JWT
            localStorage.setItem("access_token", jwtData.token);

            // Navigate
            navigate(from, { replace: true });

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <section className="relative overflow-hidden py-24">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"></div>

            </div>

            <div className="relative mx-auto max-w-6xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}

                    <div>

                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
                            Join Language Mastery
                        </span>

                        <h1 className="mt-8 text-5xl font-black leading-tight text-white">

                            Create Your

                            <span className="bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-transparent">
                                {" "}Learning Account
                            </span>

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

                            Start learning languages with expert instructors,
                            interactive classes, real progress tracking, and a
                            modern learning experience built for students.

                        </p>

                        <div className="mt-12 flex items-center gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-amber-400 text-2xl text-slate-950 shadow-xl">

                                <FaGraduationCap />

                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-white">
                                    Begin Today
                                </h3>

                                <p className="mt-1 text-slate-400">
                                    Join thousands of learners worldwide.
                                </p>

                            </div>

                        </div>

                    </div>



                    {/* Signup Card */}

                    <div className="rounded-[32px] border border-slate-800 bg-slate-950/90 p-8 shadow-2xl backdrop-blur-xl md:p-10">

                        <h2 className="mb-2 text-center text-3xl font-black text-white">

                            Create Account

                        </h2>

                        <p className="mb-10 text-center text-slate-400">

                            Register to start your learning journey.

                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            {/* Name */}

                            <div>

                                <label className="mb-3 block font-semibold text-slate-300">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-400" />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        {...register("name", { required: true })}
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
                                    />

                                </div>

                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Name is required.
                                    </p>
                                )}

                            </div>

                            {/* Email */}

                            <div>

                                <label className="mb-3 block font-semibold text-slate-300">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-400" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register("email", { required: true })}
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
                                    />

                                </div>

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Email is required.
                                    </p>
                                )}

                            </div>

                            {/* Photo */}



                            <div className="relative">
                                <div>

                                    <label className="mb-3 block font-semibold text-slate-300">
                                        Profile Photo
                                    </label>

                                    <div className="flex items-center gap-5">

                                        {/* Preview */}

                                        <div className="flex items-center justify-center h-24 w-24 overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900">

                                            {previewImage ? (
                                                <img
                                                    src={previewImage}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-xs text-slate-500 text-center px-2">
                                                    Image Preview
                                                </div>
                                            )}

                                        </div>

                                        {/* Upload */}

                                        <div className="flex-1 relative">

                                            <FaCamera className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-400 z-10" />

                                            <input
                                                type="file"
                                                accept="image/*"
                                                {...register("photo", { required: true })}
                                                onChange={handleImagePreview}
                                                className="file-input file-input-bordered h-14 w-full rounded-xl border-slate-700 bg-slate-900 pl-14 text-white"
                                            />

                                        </div>

                                    </div>

                                    {errors.photo && (
                                        <p className="mt-2 text-sm text-red-400">
                                            Profile photo is required.
                                        </p>
                                    )}

                                </div>

                            </div>


                            {/* Password */}

                            <div>

                                <label className="mb-3 block font-semibold text-slate-300">
                                    Password
                                </label>

                                <div className="relative">

                                    <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-400" />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/,
                                        })}
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-14 text-white outline-none transition focus:border-amber-400"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-slate-400 hover:text-amber-400"
                                    >
                                        {showPassword ? (
                                            <FiEye />
                                        ) : (
                                            <FiEyeOff />
                                        )}
                                    </button>

                                </div>

                                {errors.password?.type === "required" && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Password is required.
                                    </p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Minimum 6 characters required.
                                    </p>
                                )}

                                {errors.password?.type === "pattern" && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Include one uppercase letter and one special character.
                                    </p>
                                )}

                            </div>
                            {/* Confirm Password */}

                            <div>

                                <label className="mb-3 block font-semibold text-slate-300">
                                    Confirm Password
                                </label>

                                <div className="relative">

                                    <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-400" />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                        {...register("confirm_password", {
                                            required: true,
                                        })}
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
                                    />

                                </div>

                                {errors.confirm_password && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Confirm password is required.
                                    </p>
                                )}

                                {passwordError && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {passwordError}
                                    </p>
                                )}

                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-4 text-lg font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
                            >
                                Create Account
                            </button>

                        </form>

                        {/* Divider */}

                        <div className="my-8 flex items-center gap-4">

                            <div className="h-px flex-1 bg-slate-800"></div>

                            <span className="text-sm uppercase tracking-[0.25em] text-slate-500">
                                Or
                            </span>

                            <div className="h-px flex-1 bg-slate-800"></div>

                        </div>

                        {/* Google Login */}

                        <button
                            onClick={handleGoogle}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 py-4 font-semibold text-white transition duration-300 hover:border-amber-400 hover:bg-slate-800"
                        >

                            <FaGoogle className="text-xl text-amber-400" />

                            Continue with Google

                        </button>

                        {/* Login Link */}

                        <p className="mt-8 text-center text-slate-400">

                            Already have an account?

                            <Link
                                to="/login"
                                className="ml-2 font-bold text-amber-400 transition hover:text-cyan-300"
                            >
                                Sign In
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default SignUp;
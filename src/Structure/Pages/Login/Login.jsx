import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    FaGoogle,
    FaGraduationCap,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signIn, googleLogin } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {

        signIn(data.email, data.password)
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
            .catch((err) => console.log(err));

    };

    const handleGoogle = async () => {
        try {
            const result = await googleLogin();
            console.log(result)
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

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>

            </div>

            <div className="relative mx-auto max-w-6xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Side */}

                    <div>

                        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
                            Welcome Back
                        </span>

                        <h1 className="mt-8 text-5xl font-black leading-tight text-white">

                            Continue Your

                            <span className="bg-gradient-to-r from-cyan-300 to-amber-400 bg-clip-text text-transparent">
                                {" "}Language Journey
                            </span>

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

                            Log in to access your enrolled classes, continue
                            learning, track your progress, and connect with
                            expert instructors from around the world.

                        </p>

                        <div className="mt-12 flex items-center gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-amber-400 text-2xl text-slate-950 shadow-xl">

                                <FaGraduationCap />

                            </div>

                            <div>

                                <h3 className="text-xl font-bold text-white">
                                    Learn Anytime
                                </h3>

                                <p className="mt-1 text-slate-400">
                                    Professional courses with live instructors.
                                </p>

                            </div>

                        </div>

                    </div>



                    {/* Login Card */}

                    <div className="rounded-[32px] border border-slate-800 bg-slate-950/90 p-8 shadow-2xl backdrop-blur-xl md:p-10">

                        <h2 className="mb-2 text-center text-3xl font-black text-white">

                            Sign In

                        </h2>

                        <p className="mb-10 text-center text-slate-400">

                            Login to continue learning.

                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
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
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-5 text-white outline-none transition focus:border-cyan-300"
                                    />

                                </div>

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Email is required.
                                    </p>
                                )}

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
                                        placeholder="Enter your password"
                                        {...register("password", { required: true })}
                                        className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 pl-14 pr-14 text-white outline-none transition focus:border-cyan-300"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-slate-400 transition hover:text-amber-400"
                                    >
                                        {showPassword ? (
                                            <FiEye />
                                        ) : (
                                            <FiEyeOff />
                                        )}
                                    </button>

                                </div>

                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-400">
                                        Password is required.
                                    </p>
                                )}

                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-4 text-lg font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
                            >
                                Login
                            </button>
                        </form>

                        {/* Divider */}

                        <div className="my-8 flex items-center gap-4">

                            <div className="h-px flex-1 bg-slate-800"></div>

                            <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                                Or Continue With
                            </span>

                            <div className="h-px flex-1 bg-slate-800"></div>

                        </div>

                        {/* Google */}

                        <button
                            onClick={handleGoogle}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 py-4 font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-slate-800"
                        >

                            <FaGoogle className="text-xl text-amber-400" />

                            Continue with Google

                        </button>

                        {/* Register */}

                        <p className="mt-8 text-center text-slate-400">

                            Don't have an account?

                            <Link
                                to="/signUp"
                                className="ml-2 font-bold text-amber-400 transition hover:text-cyan-300"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Login;
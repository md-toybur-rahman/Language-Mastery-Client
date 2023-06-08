import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='my-20'>
            <div className='flex justify-center font-bold text-4xl mb-10'>
                <h1>Login</h1>
            </div>
            <div className="hero bg-base-200">
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {required: true})} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" {...register("password", {required: true})} className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value={"Login"} className="btn bg-[#1BABAF] hover:bg-[#E5B14C]"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
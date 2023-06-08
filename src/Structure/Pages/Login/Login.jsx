import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [type, setType] = useState('password');
    const navigate = useNavigate();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then()
            .catch()
    };
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result);
                navigate('/')
            })
            .catch()
    }
    const passwordToggle = () => {
        setShow(!show);
        if(type == 'password') {
            setType('text');
        }
        else if(type == 'text') {
            setType('password')
        }
    }
    return (
        <div className='my-20'>
            <div className='flex justify-center font-bold text-4xl mb-10'>
                <h1>Login</h1>
            </div>
            <div className="hero">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={type} placeholder="password" {...register("password", { required: true })} className='input input-bordered' />
                            <div onClick={passwordToggle} className='text-2xl absolute right-2 bottom-3'>
                                {
                                    show ? <GrFormView></GrFormView> : <GrFormViewHide></GrFormViewHide>
                                }
                            </div>
                            {errors.password && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value={"Login"} className="btn bg-[#1BABAF] hover:bg-[#E5B14C]" />
                        </div>
                    </form>
                    <p className='ml-10'><small>New Here ? <Link className='text-[#1BABAF]' to="/signUp">Sign up</Link></small></p>
                    <div className='mx-auto my-5'>
                        <button onClick={handleGoogle} className="btn btn-circle btn-outline text-[#1BABAF] hover:bg-[#1BABAF] hover:border-[#1BABAF]">
                            <FaGoogle width={10}></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
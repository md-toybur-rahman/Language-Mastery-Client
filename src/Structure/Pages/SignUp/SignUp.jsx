import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const SignUp = () => {
    const { googleLogin, createUser, updateUserProfile, signIn } = useContext(AuthContext);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [type, setType] = useState('password');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const formData = new FormData();
        formData.append('image', data.photo[0])
        await fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageURL = result.data.display_url;
                    createUser(data.email, data.password)
                        .then((result) => {
                            console.log(result);
                            updateUserProfile(data.name, imageURL)
                        })

                }
            })
        signIn(data.email, data.password)
            .then(() => {
                navigate('/')
            })
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
        if (type == 'password') {
            setType('text');
        }
        else if (type == 'text') {
            setType('password')
        }
    }
    return (
        <div className='my-20'>
            <div className='flex justify-center font-bold text-4xl mb-10'>
                <h1>Sign Up</h1>
            </div>
            <div className="hero">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"  {...register("photo", { required: true })} className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={type} placeholder="Password" {...register("password", { required: true })} className='input input-bordered' />
                            <div onClick={passwordToggle} className='text-2xl absolute right-2 bottom-3'>
                                {
                                    show ? <GrFormView></GrFormView> : <GrFormViewHide></GrFormViewHide>
                                }
                            </div>
                            {errors.password && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" {...register("confirm-password", { required: true })} className='input input-bordered' />
                            {errors.password && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value={"Sign Up"} className="btn bg-[#1BABAF] hover:bg-[#E5B14C]" />
                        </div>
                    </form>
                    <p className='ml-10'><small>Already have an account ? <Link className='text-[#1BABAF]' to="/login">Login</Link></small></p>
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

export default SignUp;
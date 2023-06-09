
import { useForm } from "react-hook-form";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const DataEntry = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = async (data) => {
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
                }
            })
    };
    return (
        <div className='my-20'>
            <div className='flex justify-center font-bold text-4xl mb-10'>
                <h1>Data Entry</h1>
            </div>
            <div className="hero">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number of Student</span>
                            </label>
                            <input type="number" placeholder="Number of Student" {...register("student", { required: true })} className='input input-bordered' />
                            {errors.password && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name" {...register("instructor", { required: true })} className='input input-bordered' />
                            {errors.password && <span className="text-red-600 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"  {...register("photo", { required: true })} className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value={"Login"} className="btn bg-[#1BABAF] hover:bg-[#E5B14C]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataEntry;
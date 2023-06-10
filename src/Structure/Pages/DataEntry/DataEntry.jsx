
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const DataEntry = () => {
    const navigate = useNavigate();
    const { register, reset, handleSubmit} = useForm();
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
                    // const { language_name, country_name, price, instructor_name, total_student, available_seats, total_seats } = data;
                    const { language_name, country_name, price, instructor_name, total_student, available_seats} = data;
                    // const newItem = { language_name, country_name, price: parseFloat(price), instructor_name, total_student, available_seats, total_seats, photo: imageURL }
                    const newItem = { language_name, country_name, email: price, instructor_name, number_of_students: total_student, taken_total_classes: available_seats, photo: imageURL }
                    fetch('http://localhost:5000/instructors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                reset();
                                const swalWithBootstrapButtons = Swal.mixin({
                                    customClass: {
                                        confirmButton: 'btn btn-success',
                                        cancelButton: 'btn btn-danger'
                                    },
                                    buttonsStyling: false
                                })

                                swalWithBootstrapButtons.fire({
                                    title: 'Item Added Successfully',
                                    text: "You can add more if you want!",
                                    icon: 'success',
                                    showCancelButton: true,
                                    confirmButtonText: 'Add More',
                                    cancelButtonText: 'Go to Home',
                                    reverseButtons: true
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/data')
                                    } else if (
                                        /* Read more about handling dismissals below */
                                        result.dismiss === Swal.DismissReason.cancel
                                    ) {
                                        navigate('/')
                                    }
                                })
                            }
                        })
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
                                <span className="label-text">Language Name</span>
                            </label>
                            <input type="text" {...register("language_name", )} placeholder="Language Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <input type="text" {...register("country_name", )} placeholder="Country Name" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number of Student</span>
                            </label>
                            <input type="number" placeholder="Number of Student" {...register("total_student", )} className='input input-bordered' />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Available Seats</span> */}
                                <span className="label-text">Class Taken</span>
                            </label>
                            <input type="number" placeholder="Available Seats" {...register("available_seats", )} className='input input-bordered' />
                            
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Seats</span>
                            </label>
                            <input type="number" placeholder="Total Seats" {...register("total_seats", )} className='input input-bordered' />
                            
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Price</span> */}
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Price" {...register("price", )} className='input input-bordered' />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name" {...register("instructor_name", )} className='input input-bordered' />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"  {...register("photo", )} className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value={"Add Item"} className="btn bg-[#1BABAF] hover:bg-[#E5B14C]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataEntry;
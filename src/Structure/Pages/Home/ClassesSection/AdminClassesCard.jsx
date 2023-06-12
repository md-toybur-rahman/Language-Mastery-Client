import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const AdminClassesCard = ({ singleClass }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { language_name, country_name, instructor_name, total_student, available_seats, photo, price } = singleClass;
    const handleApprove = (singleClass) => {
        if (!user) {
            navigate('/login')
        }
        const { language_name, country_name, price, instructor_name, total_student, available_seats, total_seats, photo, _id } = singleClass;
        const approveItem = { language_name, country_name, price, instructor_name, total_student, available_seats, total_seats, photo };
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approveItem),
        })
            .then(res => res.json())
            .then(() => {
                fetch(`http://localhost:5000/instructors_requirements/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="relative">
                    <img className='w-[100px] h-[80px] pt-5 absolute top-0 left-3' src={photo} alt="" />
                    <img src="https://i.ibb.co/ZV9VFyP/kenny-eliason-1-a-A2-Fadydc-unsplash-2.jpg" alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{language_name} ({country_name})</h2>
                    <p><span className="font-semibold">Instructor Name:</span> {instructor_name}</p>
                    <p><span className="font-semibold">Number Of Student:</span>  {total_student}</p>
                    <p><span className="font-semibold">Available Seats:</span>  {available_seats}</p>
                    <p><span className="font-semibold">Price:</span>  {price} Tk</p>
                    <div className="card-actions justify-start mt-5">
                        <button disabled={available_seats == 0 ? true : false} onClick={() => { handleApprove(singleClass) }} className="btn bg-[#1BABAF] text-white hover:text-black">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminClassesCard;
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";


const ClassesCard = ({ singleClass }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const cart = useCart();
    const { language_name, country_name, instructor_name, total_student, available_seats, photo, price } = singleClass;
    const handleAdmit = (singleClass) => {
        if (!user) {
            navigate('/login')
        }
        const { language_name, country_name, instructor_name, available_seats, price, photo, } = singleClass;
        const cartItem = { language_name, country_name, instructor_name, available_seats, price, photo, user_email: user.email };
        const isExist = cart.find(item => item.language_name === language_name);
        if (isExist) {
            Swal.fire(
                'OPS!',
                'This item already in Cart',
                'question'
            )
        }
        if (user && !isExist) {
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem),
            })
                .then(res => res.json())
                .then(() => {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Item Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
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
                        <button onClick={() => { handleAdmit(singleClass) }} className="btn bg-[#1BABAF] text-white hover:text-black">Admit Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
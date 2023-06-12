
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import { Slide } from "react-awesome-reveal";



const MySelectedClass = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
        console.log(id);


    }
    const handlePay = (item) => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const query = data.find(singleClass => singleClass._id === item.class_id);
                console.log(query);
                const newValue = { available_seats: (query.available_seats - 1), total_student: parseInt(query.total_student) + 1 }
                fetch(`http://localhost:5000/classes/${item.class_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newValue)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            fetch(`http://localhost:5000/cart/${item._id}`, {
                                method: "DELETE"
                            })
                                .then(res => res.json())
                                .then(() => {
                                    refetch()
                                    Swal.fire(
                                        'Payment',
                                        'Your Payment Paid Successfully',
                                        'success'
                                    )
                                })
                        }
                    })
            })

    }
    return (
        <div className="mt-10">
            {/* <h1 className="text-3xl mb-8">This is My selected class: {cart.length}</h1> */}
            <Slide className="overflow-x-auto">
                <table className="table">
                    {
                        cart.length !== 0 ?
                            <thead>
                                <tr>
                                    <th>
                                        SL
                                    </th>
                                    <th>Name</th>
                                    <th>Instructor</th>
                                    <th>Price</th>
                                    <th>Available_seats</th>
                                    <th></th>
                                </tr>
                            </thead> : ''
                    }
                    <tbody>
                        {
                            cart.map((myClass, index) => <tr key={myClass._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="rounded-md w-16">
                                                <img src={myClass.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myClass.language_name}</div>
                                            <div className="text-sm opacity-50">{myClass.country_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myClass.instructor_name}
                                </td>
                                <td>
                                    {myClass.price} Tk
                                </td>
                                <td>{myClass.available_seats}</td>
                                <th className="text-center">
                                    <button onClick={() => { handleDelete(myClass._id) }} className="btn bg-[#1BABAF] btn-xs mr-5">Delete</button>
                                    <button onClick={() => { handlePay(myClass) }} className="btn bg-[#1BABAF] btn-xs">Payment</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </Slide>
        </div>
    );
};

export default MySelectedClass;
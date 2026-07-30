import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { FaTrashAlt, FaCreditCard } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [cart, refetch] = useCart();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Remove this class?",
            text: "You can always add it again later.",
            icon: "warning",
            background: "#0f172a",
            color: "#fff",
            showCancelButton: true,
            confirmButtonColor: "#06b6d4",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, Remove",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://language-mastery.onrender.com/cart/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        refetch();

                        Swal.fire({
                            icon: "success",
                            title: "Removed Successfully",
                            timer: 1500,
                            showConfirmButton: false,
                            background: "#0f172a",
                            color: "#fff",
                        });
                    });
            }
        });
    };

    const handlePay = (item) => {
        // fetch("https://language-mastery.onrender.com/classes")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         const query = data.find(
        //             (singleClass) => singleClass._id === item.class_id
        //         );

        //         const newValue = {
        //             available_seats: query.available_seats - 1,
        //             total_student: parseInt(query.total_student) + 1,
        //         };

        //         fetch(`https://language-mastery.onrender.com/classes/${item.class_id}`, {
        //             method: "PUT",
        //             headers: {
        //                 "content-type": "application/json",
        //             },
        //             body: JSON.stringify(newValue),
        //         })
        //             .then((res) => res.json())
        //             .then((data) => {
        //                 if (data.modifiedCount) {
        //                     fetch(`https://language-mastery.onrender.com/cart/${item._id}`, {
        //                         method: "DELETE",
        //                     })
        //                         .then((res) => res.json())
        //                         .then(() => {

        //                             Swal.fire({
        //                                 icon: "success",
        //                                 title: "Payment Successful",
        //                                 text: "You have successfully enrolled.",
        //                                 background: "#0f172a",
        //                                 color: "#fff",
        //                                 confirmButtonColor: "#06b6d4",
        //                             }).then(() => refetch());
        //                         });
        //                 }
        //             });
        //     });
    };

    return (
        <div className="w-full">

            {/* Header */}

            <div className="mb-8 flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

                <div>
                    <h1 className="text-3xl font-black text-white">
                        My Selected Classes
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Review your selected courses before completing payment.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-cyan-300 to-amber-400 text-slate-900 px-6 py-4 text-center shadow-lg">
                    <p className="text-sm font-medium">
                        Total Classes
                    </p>
                    <h2 className="text-3xl font-black">
                        {cart.length}
                    </h2>
                </div>

            </div>

            {/* Empty State */}

            {cart.length === 0 && (
                <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 py-24 text-center">

                    <h2 className="text-3xl font-bold text-white">
                        No Selected Classes
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Browse available classes and start learning today.
                    </p>

                </div>
            )}

            {/* Table */}

            {cart.length > 0 && (
                <Slide triggerOnce>
                    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

                        <div className="overflow-x-auto">

                            <table className="table">

                                <thead className="bg-slate-800 text-white">

                                    <tr>
                                        <th>#</th>
                                        <th>Course</th>
                                        <th>Instructor</th>
                                        <th>Price</th>
                                        <th>Seats</th>
                                        <th className="text-center">
                                            Actions
                                        </th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {cart.map((item, index) => (
                                        <tr
                                            key={item._id}
                                            className="border-slate-800 hover:bg-slate-800/60"
                                        >
                                            <td className="font-bold text-amber-400">
                                                {index + 1}
                                            </td>

                                            <td>

                                                <div className="flex items-center gap-4">

                                                    <img
                                                        src={item.photo}
                                                        alt=""
                                                        className="h-16 w-16 rounded-2xl object-cover ring-2 ring-cyan-400/30"
                                                    />

                                                    <div>

                                                        <h3 className="font-bold text-white">
                                                            {item.language_name}
                                                        </h3>

                                                        <p className="text-sm text-slate-400">
                                                            {item.country_name}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="font-medium text-slate-300">
                                                {item.instructor_name}
                                            </td>

                                            <td className="font-bold text-amber-400">
                                                ৳ {item.price}
                                            </td>

                                            <td>
                                                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300">
                                                    {item.available_seats}
                                                </span>
                                            </td>

                                            <td>

                                                <div className="flex justify-center gap-3">

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                item._id
                                                            )
                                                        }
                                                        className="btn btn-sm border-0 bg-red-500 text-white hover:bg-red-600"
                                                    >
                                                        <FaTrashAlt />
                                                        Delete
                                                    </button>

                                                    <Link to={`/dashboard/payment/${item?._id}`}>
                                                        <button
                                                            onClick={() =>
                                                                handlePay(item)
                                                            }
                                                            className="btn btn-sm border-0 bg-gradient-to-r from-cyan-300 to-amber-400 text-slate-900 hover:scale-105"
                                                        >
                                                            <FaCreditCard />
                                                            Pay
                                                        </button>
                                                    </Link>

                                                </div>

                                            </td>
                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>
                </Slide>
            )}
        </div>
    );
};

export default MySelectedClass;
import useCart from "../../../../hooks/useCart";


const MySelectedClass = () => {
    const cart = useCart();
    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div className="mt-10">
            {/* <h1 className="text-3xl mb-8">This is My selected class: {cart.length}</h1> */}
            <div className="overflow-x-auto">
                <table className="table">
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
                    </thead>
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
                                <button onClick={() => {handleDelete(myClass._id)}} className="btn bg-[#1BABAF] btn-xs mr-5">Delete</button>
                                <button className="btn bg-[#1BABAF] btn-xs">Payment</button>
                            </th>
                        </tr>)
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;
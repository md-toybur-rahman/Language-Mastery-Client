import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUserShield, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import useAxios from "../../../../hooks/useAxios";
import useHelmet from "../../../../hooks/useHelmet";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useContext } from "react";

const ManageUser = () => {
    useHelmet("Manage Users");
    const { user, logOut } = useContext(AuthContext);

    const [axiosSecure] = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const handleMakeAdmin = (user) => {
        fetch(`https://language-mastery.onrender.com/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1600,
                        background: "#0f172a",
                        color: "#fff",
                    });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`https://language-mastery.onrender.com/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is now an Instructor`,
                        showConfirmButton: false,
                        timer: 1600,
                        background: "#0f172a",
                        color: "#fff",
                    });
                }
            });
    };

    return (
        <section className="space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-4xl font-black text-white">
                        Manage Users
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Manage user roles and permissions.
                    </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-amber-400 text-2xl text-slate-950">

                            <FaUsers />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">
                                Total Users
                            </p>

                            <h2 className="text-3xl font-black text-white">
                                {users.length}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">

                <div className="overflow-x-auto">

                    <table className="table">

                        <thead className="bg-slate-950">

                            <tr className="border-slate-800 text-base text-cyan-300">

                                <th>#</th>

                                <th>User</th>

                                <th>Email</th>

                                <th>Role</th>

                                <th className="text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {users.map((person, index) => (

                                <tr
                                    key={person._id}
                                    className="border-slate-800 transition duration-300 hover:bg-slate-800/60"
                                >

                                    <td className="font-bold text-slate-300">
                                        {index + 1}
                                    </td>

                                    <td>

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 text-lg font-bold text-slate-950">

                                                {user?.photoURL ? (
                                                    <img
                                                        src={user.photoURL}
                                                        alt=""
                                                        className="h-12 w-12 rounded-full border-2 border-amber-400 object-cover"
                                                    />
                                                ) :
                                                    person.name?.charAt(0).toUpperCase()
                                                }

                                            </div>

                                            <div>

                                                <h3 className="font-bold text-white">
                                                    {person.name}
                                                </h3>

                                                <p className="text-sm capitalize text-slate-400">
                                                    {person.type}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="text-slate-300">
                                        {person.email}
                                    </td>

                                    <td>

                                        <span
                                            className={`rounded-full px-4 py-2 text-xs font-bold uppercase ${person.type === "admin"
                                                ? "bg-emerald-500/20 text-emerald-300"
                                                : person.type === "instructor"
                                                    ? "bg-amber-500/20 text-amber-300"
                                                    : "bg-slate-700 text-slate-300"
                                                }`}
                                        >
                                            {person.type}
                                        </span>

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-3">

                                            <button
                                                disabled={person.type === "admin"}
                                                onClick={() => handleMakeAdmin(person)}
                                                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${person.type === "admin"
                                                    ? "cursor-not-allowed bg-slate-700 text-slate-500"
                                                    : "bg-cyan-500 text-slate-950 hover:scale-105 hover:bg-cyan-400"
                                                    }`}
                                            >

                                                <FaUserShield />

                                                Admin

                                            </button>

                                            <button
                                                disabled={person.type === "instructor"}
                                                onClick={() =>
                                                    handleMakeInstructor(person)
                                                }
                                                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${person.type === "instructor"
                                                    ? "cursor-not-allowed bg-slate-700 text-slate-500"
                                                    : "bg-amber-400 text-slate-950 hover:scale-105 hover:bg-amber-300"
                                                    }`}
                                            >

                                                <FaChalkboardTeacher />

                                                Instructor

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    );
};

export default ManageUser;
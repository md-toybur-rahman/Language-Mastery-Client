import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import useHelmet from "../../../../hooks/useHelmet";




const ManageUser = () => {
    const [axiosSecure] = useAxios();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = (user) => {
        fetch(`https://language-mastery-server-chi.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = (user) => {
        fetch(`https://language-mastery-server-chi.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="mt-10">
            {useHelmet('Manage User')}



            <Slide className="overflow-x-auto">
                <table className="table w-full">
                    {
                        users.length !== 0 ?
                            <thead>
                                <tr>
                                    <th>
                                        SL
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead> : ''
                    }
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div>{user.type}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <th className="text-center">
                                    {
                                        user.type === 'admin' ? <button disabled={true} className="btn bg-[#1BABAF] btn-xs mr-5">Admin</button> :
                                            <button onClick={() => { handleMakeAdmin(user) }} className="btn bg-[#1BABAF] btn-xs mr-5">Admin</button>
                                    }
                                    {
                                        user.type === 'instructor' ? <button disabled={true} className="btn bg-[#1BABAF] btn-xs">Instructor</button> :
                                            <button onClick={() => { handleMakeInstructor(user) }} className="btn bg-[#1BABAF] btn-xs">Instructor</button>
                                    }

                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </Slide>
        </div>
    );
};

export default ManageUser;
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";


const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
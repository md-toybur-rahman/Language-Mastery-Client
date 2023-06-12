import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";


const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is instructor response', res);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;
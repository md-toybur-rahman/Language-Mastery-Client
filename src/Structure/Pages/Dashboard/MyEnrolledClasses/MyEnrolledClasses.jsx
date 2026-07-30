import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt, FaGlobeAsia, FaUserGraduate } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useHelmet from "../../../../hooks/useHelmet";
import useAxios from "../../../../hooks/useAxios";
import MyClassCard from "../MyClasses/MyClassCard";
import EnrolledClassCard from "./EnrolledClassCard";

const MyEnrolledClasses = () => {

    useHelmet("My Enrolled Classes");

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxios();

    const { data: enrolledClasses = [], isLoading } = useQuery({
        queryKey: ["enrolledClasses", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/payments?email=${user.email}`
            );
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center py-32">
                <span className="loading loading-spinner loading-lg text-info"></span>
            </div>
        );
    }

    return (
        <div className="w-full px-6 py-10">

            <div className="mb-10">
                <h2 className="text-4xl font-bold text-slate-800">
                    My Enrolled Classes
                </h2>

                <p className="mt-2 text-slate-500">
                    Total Enrolled : {enrolledClasses.length}
                </p>
            </div>

            {
                enrolledClasses.length === 0 ?

                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

                        <h3 className="text-2xl font-bold">
                            No Enrolled Classes
                        </h3>

                        <p className="mt-3 text-slate-500">
                            Purchase a class to see it here.
                        </p>

                    </div>

                    :

                    <div className="grid gap-8 lg:grid-cols-2">

                        {
                            enrolledClasses.map(item => (

                                <EnrolledClassCard item={item} />

                            ))
                        }

                    </div>
            }

        </div>
    );
};

export default MyEnrolledClasses;
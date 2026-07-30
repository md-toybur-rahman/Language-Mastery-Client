import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxios from "../../../../hooks/useAxios";
import useHelmet from "../../../../hooks/useHelmet";
import MyClassCard from "./MyClassCard";

const MyClasses = () => {
    // const { user } = useContext(AuthContext);
    // const [axiosSecure] = useAxios();

    // const { data: classes = [], isLoading, refetch } = useQuery({
    //     queryKey: ["my-classes", user?.email],
    //     enabled: !!user?.email,
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/classes");
    //         return res.data.filter(
    //             (item) =>
    //                 item.instructor_email === user?.email ||
    //                 item.email === user?.email
    //         );
    //     },
    // });

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxios();

    const { data: classes = [], isLoading } = useQuery({

        queryKey: ["myClasses", user?.email],

        enabled: !!user?.email,

        queryFn: async () => {

            const res = await axiosSecure.get(
                `/my_classes?email=${user.email}`
            );

            return res.data;

        }

    });

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-cyan-400"></span>
            </div>
        );
    }

    return (
        <div className="w-full py-10">
            {useHelmet("My Classes")}

            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white">
                    My Classes
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage all of your approved classes.
                </p>
            </div>

            {classes.length === 0 ? (
                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 py-24 text-center">
                    <h2 className="text-2xl font-bold text-white">
                        No Classes Found
                    </h2>

                    <p className="mt-3 text-slate-400">
                        You haven't added any approved classes yet.
                    </p>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {classes.map((singleClass) => (
                        <MyClassCard
                            key={singleClass._id}
                            singleClass={singleClass}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyClasses;
import { useQuery } from "@tanstack/react-query";
import { FaClipboardCheck } from "react-icons/fa";
import useAxios from "../../../../hooks/useAxios";
import useHelmet from "../../../../hooks/useHelmet";
import AdminClassesCard from "../../Home/ClassesSection/AdminClassesCard";
import { data } from "autoprefixer";

const ManageClasses = () => {
    useHelmet("Manage Classes");

    const [axiosSecure] = useAxios();

    const {
        data: classes = [],
        refetch,
    } = useQuery({
        queryKey: ["instructors_requirements"],
        queryFn: async () => {
            const res = await axiosSecure.get("/instructors_requirements");
            return res.data;
        },
    });

    return (
        <section className="space-y-8">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <h1 className="text-4xl font-black text-white">
                        Manage Classes
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Review and approve instructor submitted courses.
                    </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4">

                    <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-amber-400 text-2xl text-slate-950">

                            <FaClipboardCheck />

                        </div>

                        <div>

                            <p className="text-sm text-slate-400">
                                Pending Classes
                            </p>

                            <h2 className="text-3xl font-black text-white">
                                {classes.length}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

                {classes.map((singleClass) => (
                    <AdminClassesCard
                        key={singleClass._id}
                        singleClass={singleClass}
                        refetch={refetch}
                    />
                ))}

            </div>

        </section>
    );
};

export default ManageClasses;
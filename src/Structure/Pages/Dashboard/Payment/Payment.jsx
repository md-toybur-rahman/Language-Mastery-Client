// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../../../../hooks/useAxios";
// import CheckoutForm from "./CheckoutForm";
// import useHelmet from "../../../../hooks/useHelmet";

import { useParams } from "react-router-dom";
import useHelmet from "../../../../hooks/useHelmet";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {

    useHelmet("Payment");

    const { id } = useParams();

    const [axiosSecure] = useAxios();

    const { data: item = {}, isLoading } = useQuery({
        queryKey: ["payment-item", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart/${id}`);
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-5xl py-10">

            <h1 className="mb-8 text-4xl font-bold">
                Complete Payment
            </h1>

            <div className="grid gap-8 lg:grid-cols-2">

                <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

                    <img
                        src={item.photo}
                        className="mb-6 h-56 w-full rounded-2xl object-cover"
                    />

                    <h2 className="text-3xl font-bold text-white">
                        {item.language_name}
                    </h2>

                    <p className="mt-2 text-slate-400">
                        {item.country_name}
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex justify-between">
                            <span>Instructor</span>
                            <span>{item.instructor_name}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Price</span>
                            <span className="font-bold text-cyan-400">
                                ৳ {item.price}
                            </span>
                        </div>

                    </div>

                </div>

                <CheckoutForm item={item} />

            </div>

        </div>
    );
};

export default Payment;
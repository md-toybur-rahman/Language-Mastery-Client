import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxios from "../../../../hooks/useAxios";
import useHelmet from "../../../../hooks/useHelmet";
import {
    FaCheckCircle,
    FaMoneyBillWave,
    FaReceipt,
} from "react-icons/fa";

const PaymentHistory = () => {

    useHelmet("Payment History");

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxios();

    const { data: payments = [] } = useQuery({

        queryKey: ["payments", user?.email],

        enabled: !!user?.email,

        queryFn: async () => {

            const res = await axiosSecure.get(
                `/payment_history?email=${user.email}`
            );

            return res.data;

        },

    });

    return (

        <div className="w-full px-8 py-10">

            <div className="mb-10">

                <h2 className="text-4xl font-bold text-white">

                    Payment History

                </h2>

                <p className="mt-2 text-slate-400">

                    Total Payments : {payments.length}

                </p>

            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

                <table className="table">

                    <thead>

                        <tr className="border-slate-700 text-slate-300">

                            <th>#</th>

                            <th>Class</th>

                            <th>Amount</th>

                            <th>Date</th>

                            <th>Transaction</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            payments.map((payment, index) => (

                                <tr
                                    key={payment._id}
                                    className="border-slate-800 hover:bg-slate-800/60"
                                >

                                    <td className="font-semibold text-cyan-400">

                                        {index + 1}

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={payment.photo}
                                                className="h-14 w-14 rounded-xl object-cover"
                                            />

                                            <div>

                                                <h3 className="font-semibold text-white">

                                                    {payment.language_name}

                                                </h3>

                                                <p className="text-sm text-slate-400">

                                                    {payment.country_name}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-2 text-emerald-400">

                                            <FaMoneyBillWave />

                                            ৳ {payment.price}

                                        </div>

                                    </td>

                                    <td className="text-slate-300">

                                        {new Date(
                                            payment.paymentTime
                                        ).toLocaleString()}

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-2 text-cyan-400">

                                            <FaReceipt />

                                            <span className="max-w-[170px] truncate">

                                                {payment.transactionId}

                                            </span>

                                        </div>

                                    </td>

                                    <td>

                                        <span className="flex w-fit items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">

                                            <FaCheckCircle />

                                            Paid

                                        </span>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default PaymentHistory;

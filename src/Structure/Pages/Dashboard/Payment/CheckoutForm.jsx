import {
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ item }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [axiosSecure] = useAxios();

    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        if (item?.price) {

            axiosSecure.post("/create-payment-intent", {
                price: item.price,
            })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });

        }

    }, [item, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        if (!card) return;

        setProcessing(true);
        setCardError("");

        try {

            // Create Payment Method
            const { error: paymentMethodError } =
                await stripe.createPaymentMethod({
                    type: "card",
                    card,
                });

            if (paymentMethodError) {
                setCardError(paymentMethodError.message);
                return;
            }

            // Confirm Payment
            const { paymentIntent, error: confirmError } =
                await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card,
                    },
                });

            if (confirmError) {
                setCardError(confirmError.message);
                return;
            }

            if (paymentIntent.status !== "succeeded") {
                Swal.fire({
                    icon: "error",
                    title: "Payment Failed",
                });
                return;
            }

            // Send everything to server
            const payment = {
                transactionId: paymentIntent.id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,

                user_email: item.user_email,

                class_id: item.class_id,

                language_name: item.language_name,

                country_name: item.country_name,

                instructor_name: item.instructor_name,

                photo: item.photo,

                price: item.price,

                paymentTime: new Date().toISOString(),

                cartId: item._id,
            };

            const res = await axiosSecure.post("/payments", payment);

            if (res.data.success) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Payment Successful",
                    text: `Transaction ID: ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 2000,
                });

                // refetch();

                navigate("/dashboard/enrolled_classes");
            }

        } catch (err) {

            console.error(err);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message || "Something went wrong!",
            });

        } finally {

            setProcessing(false);

        }
    };

    return (

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold">
                Card Payment
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="rounded-xl border border-slate-700 bg-white p-5 text-white">

                    <CardElement />

                </div>

                <p className="mt-4 text-red-500">
                    {cardError}
                </p>

                <button
                    disabled={!stripe || !clientSecret || processing}
                    className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-300 to-amber-400 py-4 font-bold text-slate-900 transition hover:bg-cyan-400 disabled:opacity-50"
                >
                    {
                        processing
                            ? "Processing..."
                            : `Pay ৳${item.price}`
                    }
                </button>
            </form>
            <p className="mt-5">
                <span className="text-lg font-semibold text-amber-400">Test Payment:</span>
                <br />
                <br />
                <span className="text-amber-400">Card No:</span> 4242 4242 4242 4242
                <br />
                <span className="text-amber-400">MM/YY:</span> 12/34
                <br />
                <span className="text-amber-400">CVC:</span> 123
                <br />
                <span className="text-amber-400">ZIP:</span> 12345
            </p>

        </div>

    );

};

export default CheckoutForm;
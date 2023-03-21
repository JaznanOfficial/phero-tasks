import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const PaymentPageComponent = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        console.log(error, paymentMethod)
    };
    return (
        <div style={{ width: "25rem" }}>
            <form onSubmit={handleSubmit} className="w-100 mx-auto">
                <CardElement style={{ width: "100%" }} />
                <button type="submit" disabled={!stripe || !elements} className="btn btn-outline-dark mt-5">
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentPageComponent;

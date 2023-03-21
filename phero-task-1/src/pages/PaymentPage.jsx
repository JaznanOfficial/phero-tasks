import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLocation } from "react-router-dom";
import PaymentPageComponent from "../components/PaymentPageComponent";

const PaymentPage = () => {
    const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
    const { state } = useLocation();
    console.log(state);
    return (
        <Elements stripe={stripePromise}>
            <PaymentPageComponent />
        </Elements>
    );
};

export default PaymentPage;

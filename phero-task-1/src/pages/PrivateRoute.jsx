import React from "react";
import { ClockLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Navigate, useLocation } from "react-router-dom";
import UserProfile from "./UserProfile";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
    const { loading, user } = useFirebase();

    const location = useLocation();
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    if (loading) {
        return (
            <ClockLoader
                color="#E12454"
                size={"300"}
                loading={true}
                css={override}
                display={"block"}
            />
        );
    }
    console.log(user);
    return user.auth ? (
        <UserProfile />
    ) : (
        <Navigate to="/sign-in" state={{ from: location }}></Navigate>
    );
};

export default PrivateRoute;

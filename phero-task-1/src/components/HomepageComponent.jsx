import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomepageComponent = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <Link to={"/join-rider"}>
                <Button variant="outline-dark mx-3">Join as a rider</Button>
            </Link>
            <Link to={"/join-learner"}>
                <Button variant="outline-dark mx-3">Join as a Driving Lesson Learner</Button>
            </Link>
            <Link to={"/sign-in"}>
                <Button variant="outline-dark mx-3">Already signed up? sign in here</Button>
            </Link>
        </div>
    );
};

export default HomepageComponent;

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomepageComponent = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <Button variant="outline-dark mx-3">
                <Link to={"/join-rider"}>Join as a rider</Link>
            </Button>
            <Button variant="outline-dark mx-3">
                <Link to={"/join-learner"}>Join as a Driving Lesson Learner</Link>
            </Button>
            <Button variant="outline-dark mx-3">
                <Link to={"/sign-in"}>Already signed up? sign in here</Link>
            </Button>
        </div>
    );
};

export default HomepageComponent;

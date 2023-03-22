import React from "react";
import { Button, Card } from "react-bootstrap";
import "./UserProfileComponent.css";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const UserProfileComponent = () => {
    const { logOut } = useFirebase();
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            className="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        />
                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">edogaru@mail.com.my</span>
                        <span> </span>
                        <Button
                            variant="outline-dark "
                            className="mt-5"
                            onClick={() => {
                                logOut();
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label className="labels">Mobile Number</label>
                                <h6>0132146516</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Address</label>
                                <h6>vwriaofjfvwoijfwefhedfiwehffiojfsh</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Age</label>
                                <h6>25</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Car Name</label>
                                <h6>Tesla</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Car Model</label>
                                <h6>fawro</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Car Name Palette</label>
                                <h6>gwaergaw</h6>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Car Type</label>
                                <h6>Bike</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Car Driving</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">200$</Card.Subtitle>
                        <Link to={"/payment"} state={200}>
                            <Button variant="outline-dark mx-3">Pay now</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Bike Driving</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">100$</Card.Subtitle>
                        <Link to={"/payment"} state={100}>
                            <Button variant="outline-dark mx-3">Pay now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UserProfileComponent;

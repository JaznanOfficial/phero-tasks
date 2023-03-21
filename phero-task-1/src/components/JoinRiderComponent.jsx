import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const JoinRiderComponent = () => {
    return (
        <Container>
            <Form>
                <div className="d-flex flex-row align-items-start justify-content-center">
                    <div className="mx-3">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your full name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter your age" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your phone number"
                                maxLength={11}
                                minLength={11}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="floatingTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="your address"
                                style={{ height: "100px" }}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="floatingTextarea2">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="your area"
                                style={{ height: "100px" }}
                                required
                            />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className="mt-2" required>
                            <option>Car type</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </Form.Select>
                    </div>

                    <div className="mx-3">
                        <Form.Group controlId="formFile1" className="mb-3">
                            <Form.Label>Driving License pic</Form.Label>
                            <Form.Control type="file" required />
                        </Form.Group>
                        <Form.Group controlId="formFile2" className="mb-3">
                            <Form.Label>NID pic</Form.Label>
                            <Form.Control type="file" required />
                        </Form.Group>
                        <Form.Group controlId="formFile3" className="mb-3">
                            <Form.Label>Profile pic</Form.Label>
                            <Form.Control type="file" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarName">
                            <Form.Label>Car Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarModel">
                            <Form.Label>Car Model</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarPalette">
                            <Form.Label>Car Name Palette</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                    </div>
                </div>

                <Button variant="outline-dark " className="mt-5" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default JoinRiderComponent;

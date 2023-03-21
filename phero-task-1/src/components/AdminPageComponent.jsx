import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const AdminPageComponent = () => {
    return (
        <div>
            <Container>
               
                <Form>
                    <div className="d-flex flex-row align-items-start justify-content-center">
                        <div className="mx-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Button variant="outline-dark " className="mt-5" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AdminPageComponent;

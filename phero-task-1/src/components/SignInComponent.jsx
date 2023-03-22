import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from '../hooks/useFirebase';

const SignInComponent = () => {
    const { signInWithEmail } = useFirebase()
    const emailRef = useRef()
    const passwordRef = useRef()

    const signInHandler = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmail(email,password)
    }

    return (
        <Container>
            <Link to={"/"}>
                <Button variant="outline-dark mx-3 mb-5">New User? sign Up here</Button>
            </Link>
            <Form onSubmit={signInHandler}>
                <div className="d-flex flex-row align-items-start justify-content-center">
                    <div className="mx-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                required
                                ref={passwordRef}
                            />
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

export default SignInComponent;

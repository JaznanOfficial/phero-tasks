import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const JoinRiderComponent = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const ageRef = useRef();
    const addressRef = useRef();
    const areaRef = useRef();
    const carTypeRef = useRef();
    const carNameRef = useRef();
    const carModelRef = useRef();
    const carNamePaletteRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [licenseImageUpload, setLicenseImageUpload] = useState("");
    const [nidImageUpload, setNidImageUpload] = useState("");
    const [profileImageUpload, setProfileImageUpload] = useState("");

    const handleLicenseImage = (e) => {
        const image = e.target.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mdyhppy2");
        axios
            .post("https://api.cloudinary.com/v1_1/jaznanofficial/image/upload", formData)
            .then((res) => {
                console.log(res.data.secure_url);
                setLicenseImageUpload(res.data.secure_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleNidImage = (e) => {
        const image = e.target.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mdyhppy2");
        axios
            .post("https://api.cloudinary.com/v1_1/jaznanofficial/image/upload", formData)
            .then((res) => {
                console.log(res.data.secure_url);
                setNidImageUpload(res.data.secure_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleProfileImage = (e) => {
        const image = e.target.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mdyhppy2");
        axios
            .post("https://api.cloudinary.com/v1_1/jaznanofficial/image/upload", formData)
            .then((res) => {
                console.log(res.data.secure_url);
                setProfileImageUpload(res.data.secure_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const riderFormHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const age = ageRef.current.value;
        const address = addressRef.current.value;
        const area = areaRef.current.value;
        const carType = carTypeRef.current.value;
        const carName = carNameRef.current.value;
        const carModel = carModelRef.current.value;
        const carNamePalette = carNamePaletteRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const licenseImage = licenseImageUpload;
        const nidImage = nidImageUpload;
        const profileImage = profileImageUpload;
        const userType = "rider"

        if (password === confirmPassword) {
            console.log({name,email,phone,age,address,area,carType,carName,carModel,carNamePalette,password,licenseImage,nidImage,profileImage, userType})
        }
        else {
            console.log("password doesn't match")
        }
    };
    return (
        <Container>
            <h2>Rider Form</h2>
            <Form onSubmit={riderFormHandler}>
                <div className="d-flex flex-row align-items-start justify-content-center">
                    <div className="mx-3">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your full name"
                                required
                                ref={nameRef}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter your age" required ref={ageRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter your phone number"
                                maxLength={11}
                                minLength={11}
                                required
                                ref={phoneRef}
                            />
                        </Form.Group>

                        <Form.Group controlId="floatingTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="your address"
                                style={{ height: "100px" }}
                                required
                                ref={addressRef}
                            />
                        </Form.Group>
                        <Form.Group controlId="floatingTextarea2">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="your area"
                                style={{ height: "100px" }}
                                required
                                ref={areaRef}
                            />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className="mt-2" required ref={carTypeRef}>
                            <option>Car type</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </Form.Select>
                    </div>

                    <div className="mx-3">
                        <Form.Group controlId="formFile1" className="mb-3">
                            <Form.Label>Driving License pic</Form.Label>
                            <Form.Control type="file" required onChange={handleLicenseImage} />
                        </Form.Group>
                        <Form.Group controlId="formFile2" className="mb-3">
                            <Form.Label>NID pic</Form.Label>
                            <Form.Control type="file" required onChange={handleNidImage} />
                        </Form.Group>
                        <Form.Group controlId="formFile3" className="mb-3">
                            <Form.Label>Profile pic</Form.Label>
                            <Form.Control type="file" required onChange={handleProfileImage} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarName">
                            <Form.Label>Car Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required ref={carNameRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarModel">
                            <Form.Label>Car Model</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required  ref={carModelRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCarPalette">
                            <Form.Label>Car Name Palette</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required ref={carNamePaletteRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required ref={confirmPasswordRef}/>
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

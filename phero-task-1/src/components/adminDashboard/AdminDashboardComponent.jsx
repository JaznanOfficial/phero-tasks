import React from "react";
import { Button, Form } from "react-bootstrap";
import "./AdminDashboardComponent.css";

const AdminDashboardComponent = () => {
    return (
        <div class="mt-5 px-2 w-100">
            <div class="mb-2 d-flex justify-content-between align-items-center w-100">
                <div class="position-relative">
                    <span class="position-absolute search">
                        <i class="fa fa-search"></i>
                    </span>
                    <input class="form-control w-100" placeholder="Search by name, email, phone" />
                </div>

                <div class="px-2">
                    <Form.Select aria-label="Default select example">
                        <option>Age</option>
                        <option value="18-25">18-25</option>
                        <option value="25-30">25-30</option>
                        <option value="30-35">30-35</option>
                    </Form.Select>
                </div>
            </div>
            {
                <div class="table-responsive w-100">
                    <table class="table w-100">
                        <thead>
                            <tr class="bg-light">
                                {/* <th scope="col" width="5%">
                                <input class="form-check-input" type="checkbox" />
                            </th> */}
                                <th scope="col" className="mx-3">
                                    #
                                </th>
                                <th scope="col" className="mx-3">
                                    Name
                                </th>
                                <th scope="col" className="mx-3">
                                    Email
                                </th>
                                <th scope="col" className="mx-3">
                                    Phone
                                </th>
                                <th scope="col" className="mx-3">
                                    Age
                                </th>
                                <th scope="col" className="mx-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <input class="form-check-input" type="checkbox" />
                                </th>
                                <td className="mx-3">
                                    <img src="https://i.imgur.com/VKOeFyS.png" width="25" /> Althan
                                    Travis
                                </td>
                                <td className="mx-3">Avberfdsffwsefagfeag</td>
                                <td className="mx-3">198614651981</td>
                                <td className="mx-3">
                                    <i class="fa fa-check-circle-o green"></i>
                                    <span class="ms-1">25</span>
                                </td>

                                <td className="mx-3">blocked</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            <Button variant="outline-dark mx-3 mb-5">
                Block
            </Button>
            <Button variant="outline-dark mx-3 mb-5">
                Active
            </Button>
        </div>
    );
};

export default AdminDashboardComponent;

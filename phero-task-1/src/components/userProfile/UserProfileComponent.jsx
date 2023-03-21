import React from "react";
import "./UserProfileComponent.css";

const UserProfileComponent = () => {
    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            class="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        />
                        <span class="font-weight-bold">Edogaru</span>
                        <span class="text-black-50">edogaru@mail.com.my</span>
                        <span> </span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-12">
                                <label class="labels">Mobile Number</label>
                                <h6>0132146516</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Address</label>
                                <h6>vwriaofjfvwoijfwefhedfiwehffiojfsh</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Age</label>
                                <h6>25</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Car Name</label>
                                <h6>Tesla</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Car Model</label>
                                <h6>fawro</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Car Name Palette</label>
                                <h6>gwaergaw</h6>
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Car Type</label>
                                <h6>Bike</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileComponent;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import RiderJoin from "./RiderJoin";
import LearnerJoin from "./LearnerJoin";
import UserProfile from "./UserProfile";
import SignIn from "./SignIn";
import AdminPage from "./AdminPage";
import AdminDashboard from "./AdminDashboard";
import PaymentPage from "./PaymentPage";
import PrivateRoute from "./PrivateRoute";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Homepage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/join-rider"
                    element={
                        <PrivateRoute>
                            <RiderJoin />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/join-learner"
                    element={
                        <PrivateRoute>
                            <LearnerJoin />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/sign-in"
                    element={
                        
                            <SignIn />
                        
                    }
                />
                <Route
                    path="/user-profile"
                    element={
                        <PrivateRoute>
                            <UserProfile />
                        </PrivateRoute>
                    }
                />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
        </div>
    );
};

export default Layout;

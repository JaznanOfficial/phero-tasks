import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import RiderJoin from "./RiderJoin";
import LearnerJoin from "./LearnerJoin";
import UserProfile from "./UserProfile";
import SignIn from "./SignIn";
import AdminPage from "./AdminPage";
import AdminDashboard from "./AdminDashboard";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/join-rider" element={<RiderJoin />} />
                <Route path="/join-learner" element={<LearnerJoin />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
};

export default Layout;

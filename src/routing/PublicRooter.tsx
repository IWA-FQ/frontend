import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Recover from "../pages/Recover";

const PublicRooter = () => {
    return (
        <Routes>
            <Route path="*" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/recover" element={<Recover/>} />
        </Routes>
    );
};

export default PublicRooter;
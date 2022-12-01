import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Register from "../pages/Register";
import Recover from "../pages/Recover";
import Home from "../pages/Home";
import Account from "../pages/Account";
import OfferDetails from "../pages/OfferDetails";
import NotFound from "../pages/NotFound";

const ProtectedRooters = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/offer/details" element={<OfferDetails/>} />
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
};

export default ProtectedRooters;

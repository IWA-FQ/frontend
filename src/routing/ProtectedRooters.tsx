import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import OfferDetails from "../pages/OfferDetails";
import EmployerOffers from "../pages/EmployerOffers";
import Employees from "../pages/Employees";

const ProtectedRooters = () => {
    return (
        <Routes>
            <Route path="/account" element={<Account/>} />
            <Route path="/offer/details" element={<OfferDetails/>} />
            <Route path="/employer/offers" element={<EmployerOffers/>} />
            <Route path="/employer/employees" element={<Employees/>} />
            <Route path="*" element={<Home/>} />
        </Routes>
    )
};

export default ProtectedRooters;

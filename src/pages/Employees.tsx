import React, {useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import OfferList from "../components/Offer/OfferList";
import Footer from "../components/Footer";
import UserList from "../components/User/UserList";
import {UserModel} from "../models/UserModel";

const Employees = () => {
    const [employees,setEmployees] = useState<UserModel[]>([]);

    return (
        <div>
            <NavigationBar/>
            <div className="min-h-screen m-6">
                <h1 className="text-5xl text-secondary m-16">Mes employés</h1>
                <UserList users={employees} />
            </div>
            <Footer/>
        </div>
    );
};

export default Employees;
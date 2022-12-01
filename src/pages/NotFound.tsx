import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {getCurrentUser} from "../services/authentication.service";

const NotFound = () => {
    const currentUser = getCurrentUser();
    return (
        <div>
            <NavigationBar/>
            <div className="flex flex-col justify-center items-center min-h-screen text-secondary gap-y-6">
                <h1 className="lg:text-5xl md:text-4xl">Sorry, but this page doesn't exist</h1>
                <p className="text-lg">Erreur http 404</p>
            </div>
            <Footer/>
        </div>

    );
};

export default NotFound;
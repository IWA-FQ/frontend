import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {getCurrentUser} from "../services/authentication.service";

const Account = () => {
    const currentUser = getCurrentUser();
    console.log(currentUser)
    return (
        <div>
            <NavigationBar />
            <div className="p-6 text-secondary min-h-screen mt-16">
                <div className="flex flex-col items-center bg-white border rounded-md p-6 w-fit m-auto">
                    <h1 className="lg:text-5xl md:text-4xl sm:text-xl mb-2">
                        <strong>{currentUser.firstname} {currentUser.lastname.toUpperCase()}</strong>
                    </h1>
                    <div className="flex justify-evenly text-xl p-16 lg:gap-x-64 md:gap-x-36 sm:gap-x-12">
                        <div className="flex flex-col justify-between gap-y-6">
                            <h2 className="lg:text-3xl md:text-2xl sm:text-xl"><strong>Informations générales</strong></h2>
                            <div className="flex justify-between">
                                <div>
                                    <p><strong>Prénom</strong></p>
                                    <p>{currentUser.firstname}</p>
                                </div>
                                <div>
                                    <p><strong>NOM</strong></p>
                                    <p>{currentUser.lastname.toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p><strong>Ville</strong></p>
                                    <p>{currentUser.city}</p>
                                </div>
                                <div>
                                    <p><strong>Code postal</strong></p>
                                    <p>{currentUser.city_code}</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col justify-between gap-y-6">
                            <h2 className="lg:text-3xl md:text-2xl sm:text-xl"><strong>Informations professionnelles</strong></h2>
                            <div>
                                <p><strong>Adresse mail</strong></p>
                                <p>{currentUser.email}</p>
                            </div>
                            <div>
                                <p><strong>Lien du CV</strong></p>
                                <p>{currentUser.cv_link}</p>
                            </div>
                            <div>
                                <p><strong>Domaine d'activité</strong></p>
                                <p>{currentUser.work_field}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-secondary text-tertiary text-2xl rounded-md px-6 py-2 hover:bg-primary hover:scale-110 hover:duration-500">Modifier mes informations</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;
import React from 'react';
import {OfferModel} from "../models/OfferModel";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import {isEmployer} from "../services/authentication.service";

const OfferDetails = () => {
    const locationObject : OfferModel = useLocation().state
    const offer : OfferModel = new OfferModel(locationObject.id_offer,locationObject.id_employer,locationObject.title,locationObject.description,locationObject.keywords,locationObject.start_date,locationObject.end_date,locationObject.city,locationObject.city_code,locationObject.nb_positions,locationObject.salary,locationObject.advantage)
    return (
        <div>
            <NavigationBar />
            <div className="min-h-screen p-16 flex flex-col text-secondary">
                <p className="lg:text-5xl sm:text-3xl mb-8">Détails de l'offre</p>
                <div className="flex flex-col justify-start border-md shadow-lg rounded-md bg-white lg:p-32 md:p-16 sm:p-4 lg:w-3/4 md:w-full m-auto">
                    {!isEmployer() ?
                        <div className="flex flex-col items-center gap-y-6">
                            <p className="lg:text-5xl sm:text-3xl text-center"><strong>{offer.title}</strong></p>
                            <p className="text-lg">{offer.city} ({offer.city_code})</p>
                            <button className="bg-primary text-tertiary text-2xl rounded-full px-6 py-4 hover:bg-secondary hover:scale-110 hover:duration-100 active:text-primary active:translate-y-4 active:duration-100">Candidater</button>

                        </div>
                        :
                        <div className="flex flex-col items-center gap-y-6">
                            <p className="lg:text-6xl sm:text-3xl"><strong>{offer.title}</strong></p>
                            <p className="text-lg">{offer.city} ({offer.city_code})</p>
                        </div>
                    }

                    <div className="flex flex-col gap-y-6 mt-12">
                        <p className="lg:text-4xl sm:text-2xl">Description de l'offre {offer.keywords ? "("+offer.keywords+")":""}</p>
                        <p className="lg:text-lg sm:text-sm">{offer.description ? offer.description : "Aucune description"}</p>
                    </div>
                    <div className="flex justify-evenly gap-x-6">
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Nos avantages</p>
                            <p className="text-lg">{offer.advantage}</p>
                        </div>
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Durée de l'expérience</p>
                            <p className="text-lg">{ (offer.start_date ? "Du "+offer.start_date?.toLocaleDateString() : "Dès aujourd'hui") + (offer.end_date ? "au"+offer.end_date?.toLocaleDateString() : "")+(offer.getPeriod() ? " ("+offer.getPeriod() +")" : ")")}</p>
                        </div>
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Votre rémunération</p>
                            <p className="text-4xl text-center">{offer.salary ? offer.salary+" €":"Indéterminé"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OfferDetails;
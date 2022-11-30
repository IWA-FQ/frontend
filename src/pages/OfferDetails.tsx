import React from 'react';
import {OfferModel} from "../models/OfferModel";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";

interface OfferDetailsData {
    offer: OfferModel
}
/*
const offer = new OfferModel(1,
    2,
    "Titre de l'offre",
    "Lorem ipsum dolor sit amet. Aut deleniti consequuntur qui sequi sapiente vel quia quam ut impedit sunt. Sed numquam corporis est amet voluptatem ut necessitatibus velit est iste autem id voluptas soluta eum ratione deleniti. Ut quia voluptatibus aut magni doloribus aut eius dicta qui facere temporibus est rerum magni in voluptatem accusantium.",
    "mot1,mot2,mot3",
    new Date("2021-04-01"),
    new Date("2021-05-01"),
    "Ville",
    34000,
    2,
    2506.5,
    "Avantages");

 */


const OfferDetails = () => {
    const locationObject : OfferModel = useLocation().state
    const offer : OfferModel = new OfferModel(locationObject.id_offer,locationObject.id_employer,locationObject.title,locationObject.description,locationObject.keywords,locationObject.start_date,locationObject.end_date,locationObject.city,locationObject.city_code,locationObject.nb_positions,locationObject.salary,locationObject.advantage)
    console.log(offer)

    return (
        <div>
            <NavigationBar />
            <div className="min-h-screen p-16 flex flex-col text-secondary">
                <p className="text-5xl mb-16">Détails de l'offre</p>
                <div className="flex flex-col justify-start border-md shadow-lg rounded-md bg-white p-12 lg:w-3/4 md:w-full m-auto">
                    <div className="flex flex-col items-center gap-y-6">
                        <p className="text-5xl">{offer.title}</p>
                        <p className="text-lg">{offer.city} ({offer.city_code})</p>
                    </div>
                    <div className="flex flex-col gap-y-6 mt-12">
                        <p className="text-4xl">Description de l'offre ({offer.keywords})</p>
                        <p className="text-lg">{offer.description}</p>
                    </div>
                    <div className="flex justify-evenly gap-x-6">
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Nos avantages</p>
                            <p className="text-lg">{offer.advantage}</p>
                        </div>
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Durée de l'expérience</p>
                            <p className="text-lg">{offer.getPeriod()} mois</p>
                        </div>
                        <div className="flex flex-col gap-y-6 mt-12 border p-6 rounded-md bg-secondary text-white">
                            <p className="lg:text-2xl md:text-lg">Votre rémunération</p>
                            <p className="text-lg">{offer.salary} €</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OfferDetails;
import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import OfferList from "../components/Offer/OfferList";
import Footer from "../components/Footer";
import {OfferModel} from "../models/OfferModel";
import {getAllOffersByEmployer} from "../services/offer.service";

const EmployerOffers = () => {
    const [offers,setOffers] = useState<OfferModel[]>([]);
    useEffect(() => {
        let offersList :OfferModel[]=[]
        getAllOffersByEmployer().then((res) => {
            res.data.map((offer : any) => {
                const off = new OfferModel(offer.id,offer.idEmployer,offer.title,offer.description,offer.keywords,offer.start_date,offer.end_date,offer.city,offer.city_code,offer.nb_positions,offer.salary,offer.advantage)
                offersList.push(off)
            })
            setOffers(offersList)
        })
            .catch((err)=>console.log(err));
    },[])
    return (
        <div>
            <NavigationBar/>
            <div className="min-h-screen m-6">
                <h1 className="text-5xl text-secondary m-16">Mes offres</h1>
                <OfferList offers={offers} />
            </div>
            <Footer/>
        </div>
    );
};

export default EmployerOffers;
import React, {useState} from 'react';
import {getCurrentUser} from "../services/authentication.service";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import OfferList from "../components/Offer/OfferList";
import {OfferModel} from "../models/OfferModel";

const Applying = () => {
    const currentUser = getCurrentUser();
    const [applies,setApplies] = useState<OfferModel[]>([])

    return (
        <div>
            <NavigationBar/>
            <div>
                <h1 className="text-5xl text-secondary m-16">Nos recommendations pour vous</h1>
                <OfferList offers={applies} />
            </div>
            <Footer/>
        </div>
    );
};

export default Applying;
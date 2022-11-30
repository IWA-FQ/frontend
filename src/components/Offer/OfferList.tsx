import React from 'react';
import {OfferModel} from "../../models/OfferModel";
import {Link} from "react-router-dom";
import OfferDetail from "../../pages/OfferDetails";

interface OfferListData {
    offers : OfferModel[]
}

const OfferList = (props : OfferListData) => {

    return (
        <div>
            <div className="mx-auto">

                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {props.offers.map((offer) => (
                        <Link to="/offer/details" state={offer}>
                            <div className="text-secondary bg-white hover:text-tertiary hover:duration-200 hover:cursor-pointer hover:scale-110 hover:bg-primary hover:pointer group relative border rounded-md p-4 shadow-md">
                                <div className="flex justify-between gap-x-6">
                                    <div className="flex flex-col justify-between gap-y-6">
                                        <div>
                                            <p className="text-lg"><strong>{offer.title} ({offer.city})</strong></p>
                                            <p className="text-sm">{offer.description.length > 300 ? offer.description.slice(0,300).concat("...") : offer.description}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm whitespace-nowrap font-medium">Avantage(s) : {offer.advantage}</p>
                                            <p className="text-sm whitespace-nowrap font-medium">Mot(s) clé(s) : {offer.keywords}</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p className="text-lg whitespace-nowrap font-medium"><strong>{offer.salary} €</strong></p>
                                        <p className="text-sm whitespace-nowrap font-medium">{offer.getPeriod()} mois</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferList;
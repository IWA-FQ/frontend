import React from 'react';
import {OfferModel} from "../../models/OfferModel";
import {Link} from "react-router-dom";

interface OfferListData {
    offers : OfferModel[]
}

const OfferList = (props : OfferListData) => {
    return (
        <div>
            <div className="mx-8">
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
                    {props.offers.map((offer) => (
                        <div id={offer.id_offer.toString()}>
                            <Link  to="/offer/details" state={offer}>
                                <div className="text-secondary bg-white hover:z-50 hover:text-tertiary hover:duration-200 hover:cursor-pointer hover:scale-110 hover:bg-primary hover:pointer group relative border rounded-md p-4 shadow-md">
                                    <div className="flex justify-between gap-x-2">
                                        <div className="flex flex-col justify-between gap-y-2">
                                            <div>
                                                <p className="text-lg"><strong>{offer.title} ({offer.city})</strong></p>
                                                <p className="text-sm">{offer.description ? offer.description.length > 300 ? offer.description.slice(0,300).concat("...") : offer.description : "Aucune description"}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm whitespace-nowrap font-medium">Avantage(s) : {offer.advantage}</p>
                                                <p className="text-sm whitespace-nowrap font-medium">Mot(s) clé(s) : {offer.keywords}</p>
                                            </div>

                                        </div>
                                        <div>
                                            <p className="text-lg whitespace-nowrap font-medium"><strong>{offer.salary} €</strong></p>
                                            <p className="text-sm whitespace-nowrap font-medium">{offer.getPeriod()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferList;
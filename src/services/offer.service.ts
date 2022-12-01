import axios, {AxiosResponse} from "axios";
import {OfferModel} from "../models/OfferModel";
import {getTocken} from "./authentication.service";

export const getAllOffers = () : Promise<AxiosResponse<any>> => {
    const offers : OfferModel[] = [];
    const token = getTocken();
    const tokenToGive : string = token ? "Bearer "+token : "";
    /*
    if(token == "") {
        console.log("no token found in localeStorage")
        return offers
    }*/
    return axios.get("http://localhost:8080/api"+"/offer/",{headers:{Authorization:tokenToGive}})/*
        .then((res) => {
            res.data.map((offer : any) => {
                const off = new OfferModel(offer.id,offer.idEmployer,offer.title,offer.description,offer.keywords,offer.start_date,offer.end_date,offer.city,offer.city_code,offer.nb_positions,offer.salary,offer.advantage)
                offers.push(off)
            })
        })
        .catch((err)=>console.log(err));
    console.log(offers)
    return <OfferModel[]>offers;*/
}
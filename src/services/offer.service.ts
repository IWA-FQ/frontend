import axios, {AxiosResponse} from "axios";
import {getTocken} from "./authentication.service";

export const getAllOffers = () : Promise<AxiosResponse> => {

    const token = getTocken();
    const tokenToGive: string = token ? "Bearer " + token : "";
    return axios.get(process.env.REACT_APP_API_URL + "/offer/", {headers: {Authorization: tokenToGive}})
}

export const getAllOffersByEmployer = () : Promise<AxiosResponse> => {
    const token = getTocken();
    const tokenToGive: string = token ? "Bearer " + token : "";
    return axios.get( process.env.REACT_APP_API_URL+ "/offer/employer", {headers: {Authorization: tokenToGive}})
}
import axios, {AxiosResponse} from "axios";
import {getTocken} from "./authentication.service";

export const getAllOffers = () : Promise<AxiosResponse> => {
    const token = getTocken();
    const tokenToGive: string = token ? "Bearer " + token : "";
    return axios.get("http://localhost:8080/api" + "/offer/", {headers: {Authorization: tokenToGive}})
}
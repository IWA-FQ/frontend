import axios, {AxiosResponse} from "axios";
import {getTocken} from "./authentication.service";

export const getAllUsers = () : Promise<AxiosResponse> => {
    const token = getTocken();
    const tokenToGive: string = token ? "Bearer " + token : "";
    return axios.get(process.env.REACT_APP_API_URL + "/user/", {headers: {Authorization: tokenToGive}})
}
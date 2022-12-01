import axios from "axios";
import {Role} from "../models/Role";
import {UserModel} from "../models/UserModel";

export const api_link = process.env.REACT_APP_API_URL

/*** METHODS ***/

export const register = (firstname : string, lastname: string, email: string, roles : Role[], password : string) => {
    let data = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        roles:roles,
        password:password
    }
    axios
        .put(api_link+"/auth/signup",data)
        .then((res)=> {
            let r = res.data.user
            setToken(res.data.accessToken)
            setRoles(JSON.parse((r.roles)))
            updateCurrentUser(r.id_user,r.firstname,r.lastname,r.email,r.city,r.city_code,r.work_field,r.cv_link)
        })
        .catch((err) => console.error(err));
}

export const login = (email : string, password : string) => {
    axios
        .post(api_link+"/auth/signin",{email:email,password:password})
        .then((res)=> {
            let r = res.data.user
            setToken(res.data.accessToken)
            setRoles(JSON.parse((r.roles)))
            updateCurrentUser(r.id_user,r.firstname,r.lastname,r.email,r.city,r.city_code,r.work_field,r.cv_link)
        })
        .catch((err) => console.error(err));
}

export const logout = () => {
    cleanLocalStorage()
}


/*** USE LOCAL STORAGE ***/


export const getTocken = () => {
    return localStorage.getItem('accessToken');
}
const setToken = (token : string) => {
    localStorage.setItem('accessToken',token);
}

export const getRoles = () : Role[] => {
    let rl = localStorage.getItem("roles")?.split(',')
    let rlNotNull = rl ? rl : []
    const roles : Role[] = []
    for (const role of rlNotNull) {
        switch (+role) {
            case 1 : {
                roles.push(Role.ADMIN)
                break
            }
            case 2 : {
                roles.push(Role.EMPLOYEE)
                break
            }
            case 3 : {
                roles.push(Role.RECRUITER)
                break
            }
            default : { break }
        }
    }
    console.log(roles)
    return roles
}
export const setRoles = (roles : Role[]) => {
    localStorage.setItem('roles',roles.toString());
}

export const getIdUser = () : number => {
    let localStorageId = localStorage.getItem('id_user')
    let notnull = localStorageId ? localStorageId : 0
    return (<number>notnull);
}
const setIdUser = (id_user : number) => {
    localStorage.setItem('id_user',id_user.toString());
}

export const getFirstname = () => {
    let localStorageFirstname = localStorage.getItem('firstname');
    return localStorageFirstname ? localStorageFirstname : ""
}
const setFirstname = (firstname : string) => {
    localStorage.setItem('firstname',firstname);
}

export const getLastname = () => {
    let localStorageLastname = localStorage.getItem('lastname');
    return localStorageLastname ? localStorageLastname : ""
}
const setLastname = (lastname : string) => {
    localStorage.setItem('lastname',lastname);
}

export const getEmail = () => {
    let localStorageEmail = localStorage.getItem('email');
    return localStorageEmail ? localStorageEmail : ""
}
const setEmail = (email : string) => {
    localStorage.setItem('email',email);
}

export const getCity = () => {
    let localStorageCity = localStorage.getItem('city');
    return localStorageCity ? localStorageCity : ""
}
const setCity = (city : string) => {
    localStorage.setItem('city',city);
}

export const getCityCode = () : number => {
    let localStorageCityCode = localStorage.getItem('city_code')
    let notnull = localStorageCityCode ? localStorageCityCode : 0
    return (<number>notnull);
}
const setCityCode = (city_code : number) => {
    localStorage.setItem('city_code',city_code.toString());
}

export const getWorkField = () => {
    let localStorageWorkField = localStorage.getItem('work_field');
    return localStorageWorkField ? localStorageWorkField : ""
}
const setWorkField = (work_field : string) => {
    localStorage.setItem('work_field',work_field);
}

export const getCV = () => {
    let localStorageCV = localStorage.getItem('cv_link');
    return localStorageCV ? localStorageCV : ""
}
const setCV = (cv_link : string) => {
    localStorage.setItem('cv_link',cv_link);
}

export const getCurrentUser = () => {
    const user : UserModel =
        new UserModel(
            getIdUser(),
            getFirstname(),
            getLastname(),
            getEmail(),
            getCity(),
            getCityCode(),
            getWorkField(),
            getCV()
        )
    return user
}

export const updateCurrentUser = (id_user : number, firstname : string, lastname : string, email : string, city : string, city_code : number, work_field : string, cv_link : string) => {
    setIdUser(id_user)
    setFirstname(firstname)
    setLastname(lastname)
    setEmail(email)
    setCity(city)
    setCityCode(city_code)
    setWorkField(work_field)
    setCV(cv_link)
}

export const cleanLocalStorage = () => {
    localStorage.clear()
}


/*** CHECKING ***/

export const isAuthenticated = () => {
    return getTocken() != null;
}

const checkRole = (roleToCheck : Role) => {
    var test : boolean = false;
    (getRoles()).map((role : Role) => {
        if(role.valueOf() == roleToCheck) {
            test = true
        }
    })
    return test;
}

export const isEmployer = () => {
    return checkRole(Role.RECRUITER);
}

export const isJobseeker = () => {
    return checkRole(Role.EMPLOYEE);
}

export const isAdmin = () => {
    return checkRole(Role.ADMIN);
}




import axios from "axios";
import {Role} from "../models/Role";
import {UserModel} from "../models/UserModel";

/*** METHODS ***/

var api = process.env.REACT_APP_API_URL;

export const register = (firstname : string, lastname: string, email: string, password : string, city: string, city_code : number, work_field : string, cv_link : string, roles : Role[]) => {
    let data = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        city:city,
        city_code:city_code,
        work_field:work_field,
        cv_link:cv_link,
        roles:roles,
    }
    axios
        .post("http://localhost:8080/api"+"/auth/signup",data,{})
        .then((res)=> {
            let r = res.data.user
            console.log("res",r)
            setToken(res.data.accessToken)
            setRoles(r.roles)
            updateCurrentUser(r.id,r.firstname,r.lastname,r.email,r.city,r.city_code,r.work_field,r.cv_link)
            window.location.reload()
        })
        .catch((err) => console.error(err));
}

export const login = (email : string, password : string) => {
    axios
        .post("http://localhost:8080/api"+"/auth/signin",{email:email,password:password})
        .then((res)=> {
            let r = res.data.user
            setToken(res.data.accessToken)
            updateCurrentUser(r.id,r.firstname,r.lastname,r.email,r.city,r.city_code,r.work_field,r.cv_link)
            setRoles(r.roles)
            window.location.reload()
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
        switch (role) {
            case "admin" : {
                roles.push(Role.ADMIN)
                break
            }
            case "employee" : {
                roles.push(Role.EMPLOYEE)
                break
            }
            case "recruiter" : {
                roles.push(Role.RECRUITER)
                break
            }
            default : { break }
        }
    }
    return roles
}
export const setRoles = (roles : [{id:number,name:string}]) => {
    if(!roles) {
        localStorage.setItem("roles","null")
        return
    }
    const rolesToStore = [];
    for(const role of roles) {
        switch (role.name) {
            case "ROLE_EMPLOYEE": {
                rolesToStore.push("employee")
                break
            }
            case "ROLE_RECRUITER": {
                rolesToStore.push("recruiter")
                break
            }
            case "ROLE_ADMIN": {
                rolesToStore.push("admin")
                break
            }
            default : {
                break
            }
        }
    }
    localStorage.setItem('roles',rolesToStore.toString());
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
    localStorage.setItem("id_user",id_user.toString())
    localStorage.setItem("firstname",firstname)
    localStorage.setItem("lastname",firstname)
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




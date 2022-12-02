import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {getCurrentUser, register, updateAccount} from "../services/authentication.service";
import {Role} from "../models/Role";
import Select from "react-select";

const Account = () => {
    const currentUser = getCurrentUser();
    const [update,setUpdate] = useState(false)
    const [firstname,setFirstname] = useState(currentUser.firstname)
    const [lastname,setLastname] = useState(currentUser.lastname)
    const [email,setEmail] = useState(currentUser.email)
    const [password,setPassword] = useState('')
    const [city,setCity] = useState(currentUser.city)
    const [cityCode,setCityCode] = useState(currentUser.city_code)
    const [workField,setWorkField] = useState(currentUser.work_field)
    const [cvLink,setCvLink] = useState(currentUser.cv_link)
    const handleInputChange = (e : any) => {
        const {id , value} = e.target;
        switch (id) {
            case "firstname" : {
                setFirstname(value)
                break
            }
            case "lastname" : {
                setLastname(value)
                break
            }
            case "email" : {
                setEmail(value)
                break
            }
            case "password" : {
                setPassword(value)
                break
            }
            case "city" : {
                setCity(value)
                break
            }
            case "cityCode" : {
                setCityCode(+value)
                break
            }
            case "workField" : {
                setWorkField(value)
                break
            }
            case "cvLink" : {
                setCvLink(value)
                break
            }
            default : {
                break
            }
        }

    }
    const handleSubmit = () => {
        updateAccount(firstname,lastname,email,password,city,cityCode,workField,cvLink)
    }
    return (
        <div>
            <NavigationBar />
            <div className="p-6 text-secondary min-h-screen mt-16">
                <div className="flex flex-col items-center bg-white border rounded-md p-6 w-fit m-auto">
                    <h1 className="lg:text-5xl md:text-4xl sm:text-xl mb-2">
                        <strong>{currentUser.firstname} {currentUser.lastname.toUpperCase()}</strong>
                    </h1>
                    <div className="flex justify-evenly text-xl p-16 lg:gap-x-64 md:gap-x-36 sm:gap-x-12">
                        <div className="flex flex-col justify-between gap-y-6">
                            <h2 className="lg:text-3xl md:text-2xl sm:text-xl"><strong>Informations générales</strong></h2>
                            <div className="flex justify-between">
                                <div>
                                    <p><strong>Prénom</strong></p>
                                    <p>{currentUser.firstname}</p>
                                </div>
                                <div>
                                    <p><strong>NOM</strong></p>
                                    <p>{currentUser.lastname.toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p><strong>Ville</strong></p>
                                    <p>{currentUser.city}</p>
                                </div>
                                <div>
                                    <p><strong>Code postal</strong></p>
                                    <p>{currentUser.city_code}</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col justify-between gap-y-6">
                            <h2 className="lg:text-3xl md:text-2xl sm:text-xl"><strong>Informations professionnelles</strong></h2>
                            <div>
                                <p><strong>Adresse mail</strong></p>
                                <p>{currentUser.email}</p>
                            </div>
                            <div>
                                <p><strong>Lien du CV</strong></p>
                                <p>{currentUser.cv_link}</p>
                            </div>
                            <div>
                                <p><strong>Domaine d'activité</strong></p>
                                <p>{currentUser.work_field}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <a onClick={(e)=>{setUpdate(!update)}} className="bg-secondary text-tertiary text-2xl rounded-md px-6 py-2 hover:bg-primary hover:cursor-pointer hover:scale-110 hover:duration-500">Modifier mes informations</a>
                    </div>
                    <div className={update ? "" : "hidden"}>
                        <div className="m-6">
                            <div className="-space-y-px rounded-md shadow-sm ">
                                <div>
                                    <label htmlFor="firstname" className="sr-only">
                                        Prénom
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        autoComplete="firstname"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Prénom"
                                        value={firstname}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="sr-only">
                                        Lastname
                                    </label>
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="lastname"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Nom de famille"
                                        value={lastname}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Adresse mail"
                                        value={email}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Mot de passe
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Mot de passe"
                                        value={password}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="sr-only">
                                        Ville
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        autoComplete="city"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Ville"
                                        value={city}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city_code" className="sr-only">
                                        Code postal
                                    </label>
                                    <input
                                        id="cityCode"
                                        name="city_code"
                                        type="text"
                                        autoComplete="city_code"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Code postal"
                                        value={cityCode}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="work_field" className="sr-only">
                                        Domaine d'activité
                                    </label>
                                    <input
                                        id="workField"
                                        name="work_field"
                                        type="text"
                                        autoComplete="work_field"
                                        required
                                        className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Domaine d'activité"
                                        value={workField}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvLink" className="sr-only">
                                        Lien du cv
                                    </label>
                                    <input
                                        id="cvLink"
                                        name="cv_link"
                                        type="text"
                                        autoComplete="cv_link"
                                        required
                                        className="relative block w-full appearance-none border rounded-b-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Lien du CV (curriculum vitae)"
                                        value={cvLink}
                                        onChange = {(e) => handleInputChange(e)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSubmit} className="bg-secondary text-tertiary text-2xl mt-6 rounded-md px-6 py-2 hover:bg-primary hover:scale-110 hover:duration-500">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;
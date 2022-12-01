import React, {useState} from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import NavigationBar from "../components/NavigationBar";
import {Role} from "../models/Role";
import Select from 'react-select'
import {register} from "../services/authentication.service";

const roleOptions = [
    { value: Role.EMPLOYEE, label: 'Chercheur d\'emploi'},
    { value: Role.RECRUITER, label: 'Recruteur' },
]

const Register = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [city,setCity] = useState('')
    const [cityCode,setCityCode] = useState(0)
    const [workField,setWorkField] = useState('')
    const [cvLink,setCvLink] = useState('')
    const [role,setRole] = useState([Role.EMPLOYEE])
    const handleInputChange = (e : any) => {
        const {id , value} = e.target;
        console.log(id,value);
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
    const handleSelectChange = (e : any) => {
        switch (e.value) {
            case "employee" : {
                setRole([Role.EMPLOYEE])
                break
            }
            case "recruiter" : {
                setRole([Role.RECRUITER])
                break
            }
            default : {
                break
            }
        }
    }
    const handleSubmit = () => {
        register(firstname,lastname,email,password,city,cityCode,workField,cvLink,role)
    }

    return (
        <div>
            <NavigationBar/>
            <div className="flex min-h-full items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
                <div className="w-full max-w-md space-y-8 rounded bg-white border-2 p-12">
                    <div>
                        <img
                            className="mx-auto h-36 mw-auto"
                            src="/assets/img/polylink-transparent.png"
                            alt="Polylink logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                            Création de mon compte
                        </h2>
                    </div>
                    <div className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
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
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    autoComplete="lastname"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Nom de famille"
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
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Mot de passe"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="city"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Ville"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="city_code" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="cityCode"
                                    name="city_code"
                                    type="text"
                                    autoComplete="city_code"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Code postal"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="work_field" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="workField"
                                    name="work_field"
                                    type="text"
                                    autoComplete="work_field"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Domaine d'activité"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <label htmlFor="cvLink" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="cvLink"
                                    name="cv_link"
                                    type="text"
                                    autoComplete="cv_link"
                                    required
                                    className="relative block w-full appearance-none border rounded-b-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Lien du CV (curriculum vitae)"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <Select id="roles" options={roleOptions} onChange = {(e) => handleSelectChange(e)} defaultValue={roleOptions[0]} className="mt-2 text-primary hover:cursor-pointer" />
                            </div>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium hover:bg-primary hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

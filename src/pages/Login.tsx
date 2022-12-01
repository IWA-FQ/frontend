import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import {getTocken, isAuthenticated, login} from "../services/authentication.service";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleInputChange = (e : any) => {
        const {id , value} = e.target;
        switch (id) {
            case "email" : {
                setEmail(value)
                break
            }
            case "password" : {
                setPassword(value)
                break
            }
            default : {
                break
            }
        }

    }
    const handleSubmit = async () => {
        await login(email,password);
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
                            Connexion à mon compte
                        </h2>
                        <p className="mt-2 text-center text-sm text-600">
                            Ou{' '}
                            <a href="/register" className="font-medium text-secondary text-600 hover:text-primary">
                                inscription ici
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm ">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Adresse mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Adresse mail"
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
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Mot de passe"
                                    onChange = {(e) => handleInputChange(e)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">

                            <div className="text-sm">
                                <a href="/recover" className="font-medium text-secondary text-600 hover:text-primary">
                                    Mot de passe oublié?
                                </a>
                            </div>
                        </div>

                        <div>
                            <a onClick={handleSubmit}
                                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium hover:bg-primary hover:text-tertiary active:bg-secondary active:scale-90 active:duration-200"
                            >
                                Se connecter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

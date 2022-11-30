import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'

const Register = () => {
    return (
        <div>
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
                    <form className="mt-8 space-y-6" action="/home" method="GET">
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
                                />
                            </div>
                            <div>
                                <label htmlFor="city_code" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="city_code"
                                    name="city_code"
                                    type="text"
                                    autoComplete="city_code"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Code postal"
                                />
                            </div>
                            <div>
                                <label htmlFor="work_field" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="work_field"
                                    name="work_field"
                                    type="text"
                                    autoComplete="work_field"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Domaine d'activité"
                                />
                            </div>
                            <div>
                                <label htmlFor="cv_link" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="cv_link"
                                    name="cv_link"
                                    type="text"
                                    autoComplete="cv_link"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Lien du CV (curriculum vitae)"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Adresse mail"
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
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Mot de passe"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="sr-only">
                                    Rôle
                                </label>
                                <select name="Rôle" placeholder="Rôle">
                                    <option value="employer"></option>
                                    <option value="jobseeker"></option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium hover:bg-primary hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

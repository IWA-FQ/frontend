import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'

const Login = () => {
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
                            Connexion à mon compte
                        </h2>
                        <p className="mt-2 text-center text-sm text-600">
                            Ou{' '}
                            <a href="#" className="font-medium text-secondary text-600 hover:text-primary">
                                inscription ici
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="/home" method="GET">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm ">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Adresse mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Adresse mail"
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
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-secondary text-600 hover:text-primary">
                                    Mot de passe oublié?
                                </a>
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
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

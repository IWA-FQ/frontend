import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'

const Recover = () => {
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
                            Récupération de mon mot de passe
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded shadow-sm ">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Addresse mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Adresse mail"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded border border-transparent py-2 px-4 text-sm font-medium hover:bg-primary hover:text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                                Réinitialiser mon mot de passe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Recover;

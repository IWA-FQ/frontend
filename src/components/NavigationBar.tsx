import React, {Fragment} from 'react';
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import {UserModel} from "../models/UserModel";
import {getCurrentUser, isAuthenticated, isEmployer, logout} from "../services/authentication.service";

interface NavigationBarData {
    user : UserModel
}

const employerRole = isEmployer()

const navigationJobSeeker = [
    { name: 'Mes candidatures', href: '#', current: false },
]
const navigationEmployer = [
    { name: 'Mes offres', href: '/employer/offers', current: false },
    { name: 'Mes employés', href: '/employer/employees', current: false },
]

const navigation = employerRole ? navigationEmployer : navigationJobSeeker;

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const displayUserBtn = (display : boolean, open : any) => {
    return !display ? <></>
        :
        <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:text-primary">
                <span className="sr-only">Open main menu</span>
                {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
        </div>
}

const NavigationBar = () => {
    const currentUser = getCurrentUser()
    const handleLogout = (e : any) => {
        logout()
    }

    return (
        <div className="pt-2 pb-2 shadow-lg sticky top-0 z-50 bg-tertiary">
            <Disclosure as="nav" className="bg-transparent text-secondary">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="/home"><img
                                            className="h-36 w-full"
                                            src="/assets/img/polylink-title.png"
                                            alt="PolyLink"

                                        /></a>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {isAuthenticated() ? <SearchBar placeholder={employerRole ? 'Rechercher un candidat' : 'Rechercher un job'}/> : <></>}
                                            {navigation.map((item) => (
                                                isAuthenticated() ?
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-primary text-tertiary'
                                                            : 'text-tertiary bg-secondary',
                                                        'px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-primary hover:scale-110 hover:duration-100'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                                    : <></>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                {isAuthenticated() ? <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-12 w-12 rounded-full" src="assets/img/person.PNG" alt="" />
                                                </Menu.Button> : <></>}
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item key={"Mon profil"}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={"/account"}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {"Mon profil"}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item key={"Se déconnecter"}>
                                                    {({ active }) => (
                                                        <a href={"/"}
                                                        onClick={(e)=>handleLogout(e)}
                                                        className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                        >
                                                    {"Se déconnecter"}
                                                        </a>
                                                        )}
                                                        </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                {displayUserBtn(isAuthenticated(),open)}
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        state={currentUser}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-primary' : 'text-gray-300 hover:bg-gray-700 hover:text-primary',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src="assets/img/person.PNG" alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-primary">{currentUser ? currentUser.firstname + currentUser.lastname : "Aucun utilisateur"}</div>
                                        <div className="text-sm font-medium leading-none">{currentUser ? currentUser.email : "Aucun utilisateur"}</div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <Disclosure.Button
                                        key={"Mon profil"}
                                        as="a"
                                        href={"/account"}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-primary"
                                    >{"Mon profil"}
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                    key={"Se déconnecter"}
                                    as="a"
                                    onClick={(e : any)=>handleLogout(e)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-primary"
                                    >
                                        {"Se déconnecter"}
                                    </Disclosure.Button>

                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default NavigationBar;
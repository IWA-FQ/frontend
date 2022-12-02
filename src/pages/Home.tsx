import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import {OfferModel} from "../models/OfferModel";
import {UserModel} from "../models/UserModel";
import UserList from "../components/User/UserList";
import OfferList from "../components/Offer/OfferList";
import Footer from "../components/Footer";
import {isEmployer} from "../services/authentication.service";
import {getAllOffers} from "../services/offer.service";
import {getAllUsers} from "../services/user.service";

const Home = () => {
    const [offers,setOffers] = useState<OfferModel[]>([]);
    const [jobseekers,setJobseekers] = useState<UserModel[]>([]);

    useEffect(() => {
        let offersList :OfferModel[]=[]
        getAllOffers().then((res) => {
            res.data.map((offer : any) => {
                const off = new OfferModel(offer.id,offer.idEmployer,offer.title,offer.description,offer.keywords,new Date(offer.start_date),new Date(offer.end_date),offer.city,offer.city_code,offer.nb_positions,offer.salary,offer.advantage)
                offersList.push(off)
            })
            setOffers(offersList)
        })
            .catch((err)=>console.log(err));
    },[])
    useEffect(() => {
        let userList :UserModel[]=[]
        getAllUsers().then((res) => {
            res.data.map((user : any) => {
                const roles : [] = user.roles
                let test = false;
                roles.map((role : any) => {
                    if(role.name == "ROLE_EMPLOYEE"){
                        test = true;
                    }
                })
                if(test) {
                    const us = new UserModel(user.id,user.firstname,user.lastname,user.email,user.city,user.city_code,user.work_field,user.cv_link)
                    userList.push(us)
                }
            })
            setJobseekers(userList)
            console.log(userList)
        })
            .catch((err)=>console.log(err));
    },[])

    return (
        <div>
            <NavigationBar />

            <div className="mb-16 flex flex-col justify-between px-4 sm:px-6 lg:px-8 min-h-screen">
                {!isEmployer() ?
                    (<div>
                        <h1 className="text-5xl text-secondary m-16">Nos recommendations pour vous</h1>
                        <OfferList offers={offers} />
                    </div>)
                    :
                    (<div>
                        <h1 className="text-5xl text-secondary m-16">Les chercheurs d'emploi</h1>
                        <UserList users={jobseekers} />
                    </div>)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
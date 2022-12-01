import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import {OfferModel} from "../models/OfferModel";
import {UserModel} from "../models/UserModel";
import UserList from "../components/User/UserList";
import OfferList from "../components/Offer/OfferList";
import Footer from "../components/Footer";
import {getCurrentUser, isEmployer} from "../services/authentication.service";
import {getAllOffers} from "../services/offer.service";
import {Simulate} from "react-dom/test-utils";

//TODO delete static properties
const users = [
    new UserModel(2,"Quentin","Desbrousses","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(1,"Prénom 1","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(3,"Prénom 3","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(5,"Prénom 5","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(29,"Prénom 29","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(25,"Prénom 25","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(62,"Prénom 62","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
]

const Home = () => {

    const currentUser = getCurrentUser();
    const [offers,setOffers] = useState<OfferModel[]>([]);
    useEffect(() => {
        let offersList :OfferModel[]=[]
        getAllOffers().then((res) => {
            res.data.map((offer : any) => {
                const off = new OfferModel(offer.id,offer.idEmployer,offer.title,offer.description,offer.keywords,offer.start_date,offer.end_date,offer.city,offer.city_code,offer.nb_positions,offer.salary,offer.advantage)
                offersList.push(off)
            })
            console.log(offersList.length)
            setOffers(offersList)
        })
            .catch((err)=>console.log(err));
        console.log(offersList.length)
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
                        <UserList users={users} />
                    </div>)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
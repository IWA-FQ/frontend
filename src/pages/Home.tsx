import React, {useEffect, useState} from 'react';
import NavigationBar from "../components/NavigationBar";
import {OfferModel} from "../models/OfferModel";
import {UserModel} from "../models/UserModel";

import UserList from "../components/User/UserList";
import OfferList from "../components/Offer/OfferList";
import Footer from "../components/Footer";
import {get} from "../services/http.service";

interface test {
    id : number
    userId : number
    title : string
}
const isEmployer = false;
const offers = [
    new OfferModel(1,2,"Titre de l'offre","Lorem ipsum dolor sit amet. Aut deleniti consequuntur qui sequi sapiente vel quia quam ut impedit sunt. Sed numquam corporis est amet voluptatem ut necessitatibus velit est iste autem id voluptas soluta eum ratione deleniti. Ut quia voluptatibus aut magni doloribus aut eius dicta qui facere temporibus est rerum magni in voluptatem accusantium.","mot1,mot2,mot3",new Date("2021-04-01"),new Date("2021-05-01"),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(2,2,"Titre de l'offre 2","Lorem ipsum dolor sit amet. Aut deleniti consequuntur qui sequi sapiente vel quia quam ut impedit sunt. Sed numquam corporis est amet voluptatem ut necessitatibus velit est iste autem id voluptas soluta eum ratione deleniti. Ut quia voluptatibus aut magni doloribus aut eius dicta qui facere temporibus est rerum magni in voluptatem accusantium.","mot1,mot2,mot3",new Date("2021-04-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(156,2,"Titre de l'offre 156","Description de l'offre","mot1,mot2,mot3",new Date("2024-04-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(15,2,"Titre de l'offre 15","Lorem ipsum dolor sit amet. Aut deleniti consequuntur qui sequi sapiente vel quia quam ut impedit sunt. Sed numquam corporis est amet voluptatem ut necessitatibus velit est iste autem id voluptas soluta eum ratione deleniti. Ut quia voluptatibus aut magni doloribus aut eius dicta qui facere temporibus est rerum magni in voluptatem accusantium.","mot1,mot2,mot3",new Date("2021-05-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(12,2,"Titre de l'offre 12","Description de l'offre","mot1,mot2,mot3",new Date("2021-04-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(164,2,"Titre de l'offre 164","Lorem ipsum dolor sit amet. Aut deleniti consequuntur qui sequi sapiente vel quia quam ut impedit sunt. Sed numquam corporis est amet voluptatem ut necessitatibus velit est iste autem id voluptas soluta eum ratione deleniti. Ut quia voluptatibus aut magni doloribus aut eius dicta qui facere temporibus est rerum magni in voluptatem accusantium.","mot1,mot2,mot3",new Date("2021-01-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
    new OfferModel(21,2,"Titre de l'offre 21","Description de l'offre","mot1,mot2,mot3",new Date("2021-08-01"),new Date(),"Ville",34000,2,2506.5,"Avantages"),
]
const users = [
    new UserModel(2,"Prénom 2","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(1,"Prénom 1","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(3,"Prénom 3","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(5,"Prénom 5","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(29,"Prénom 29","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(25,"Prénom 25","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
    new UserModel(62,"Prénom 62","Nom","prenom.nom@gmail.com","Ville",34000,"Domaine d\'activité","lien_du_cv.fr"),
]

const listToDisplay = () => {

    /*
    const [sdata,setSData] = useState<test[]>([]);
    useEffect(() => {
        get().then((res)=>setSData(res.data));
    },[])
     */

    return !isEmployer ?
        (<div>
            <h1 className="text-5xl text-secondary m-16">Nos recommendations pour vous</h1>
            <OfferList offers={offers} />
        </div>)
        :
        (<div>
            <h1 className="text-5xl text-secondary m-16">Les chercheurs d'emploi</h1>
            <UserList users={users} />
        </div>)
}

const Home = () => {

    return (
        <div>
            <NavigationBar />
            <div className="mb-16 flex flex-col justify-between px-4 sm:px-6 lg:px-8">
                {listToDisplay()}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
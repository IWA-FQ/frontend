import React from 'react';

const Footer = () => {
    return (
        <div className="h-full bg-secondary text-tertiary flex justify-evenly p-8">
            <div className="flex flex-col justify-between">
                <h2><strong>Créé en 2022 par</strong></h2>
                <div>
                    <p>Alexandre FERNIQUE</p>
                    <a className="hover:text-primary" href="https://github.com/Alexandre-Fernique" target="_blank">lien github</a>
                </div>
                <p>&</p>
                <div>
                    <p>Quentin Desbrousses</p>
                    <a className="hover:text-primary" href="https://github.com/QuentinDesbrousses" target="_blank">lien github</a>
                </div>
            </div>
            <div>
                <h2><strong>Projet</strong></h2>
                <a className="hover:text-primary" href="https://github.com/IWA-FQ" target="_blank">code source</a>
            </div>
            <div className="flex flex-col gap-y-2">
                <h2><strong>Établissements</strong></h2>
                <div className="flex flex-col justify-between content-center">
                    <a href="https://www.polytech.umontpellier.fr/" target="_blank"><img className="h-12 w-auto" src="https://file.diplomeo-static.com/file/00/00/01/34/13432.svg"/></a>
                    <a href="https://www.umontpellier.fr/" target="_blank"><img className="h-12 w-auto" src="https://univ-droit.fr/images/structures/universites/318/univ-montpellier.png"/></a>
                </div>

            </div>
        </div>
    );
};

export default Footer;
export class OfferModel {
    id_offer : number;
    id_employer : number;
    title : string | null;
    description : string | null;
    keywords : string | null;
    start_date : Date | null;
    end_date : Date | null;
    city : string | null;
    city_code : number | null;
    nb_positions : number | null;
    salary : number | null;
    advantage : string | null;


    constructor(id_offer: number, id_employer: number, title: string | null, description: string | null, keywords: string | null, start_date: Date | null, end_date: Date | null, city: string | null, city_code: number | null, nb_positions: number | null, salary: number | null, advantage: string | null) {
        this.id_offer = id_offer;
        this.id_employer = id_employer;
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.start_date = start_date;
        this.end_date = end_date;
        this.city = city;
        this.city_code = city_code;
        this.nb_positions = nb_positions;
        this.salary = salary;
        this.advantage = advantage;
    }

    /**
     *
     * @param daysPerMonth
     */
    getPeriod(daysPerMonth : number = 20) : string {
        if(!this.start_date || !this.end_date){
            return "Durée indéterminée"
        }
        let timeInMilisec: number = Math.abs(this.end_date.getTime() - this.start_date.getTime());
        let period : number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
        return "("+period / daysPerMonth + " mois)";
    }
}

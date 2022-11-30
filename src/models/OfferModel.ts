export class OfferModel {
    id_offer : number;
    id_employer : number;
    title : string;
    description : string;
    keywords : string;
    start_date : Date;
    end_date : Date;
    city : string;
    city_code : number;
    nb_positions : number;
    salary : number;
    advantage : string;


    constructor(id_offer: number, id_employer: number, title: string, description: string, keywords: string, start_date: Date, end_date: Date, city: string, city_code: number, nb_positions: number, salary: number, advantage: string) {
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
    getPeriod(daysPerMonth : number = 20) : number {
        let timeInMilisec: number = Math.abs(this.end_date.getTime() - this.start_date.getTime());
        let period : number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
        return period / daysPerMonth;
    }
}

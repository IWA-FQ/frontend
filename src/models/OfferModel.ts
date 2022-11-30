export class OfferModel {
    private _id_offer : number;
    private _id_employer : number;
    private _title : string;
    private _description : string;
    private _keywords : string;
    private _start_date : Date;
    private _end_date : Date;
    private _city : string;
    private _city_code : number;
    private _nb_positions : number;
    private _salary : number;
    private _advantage : string;

    constructor(id_offer: number, id_employer: number, title: string, description: string, keywords: string, start_date: Date, end_date: Date, city: string, city_code: number, nb_positions: number, salary: number, advantage: string) {
        this._id_offer = id_offer;
        this._id_employer = id_employer;
        this._title = title;
        this._description = description;
        this._keywords = keywords;
        this._start_date = start_date;
        this._end_date = end_date;
        this._city = city;
        this._city_code = city_code;
        this._nb_positions = nb_positions;
        this._salary = salary;
        this._advantage = advantage;
    }

    get id_offer(): number {
        return this._id_offer;
    }

    set id_offer(value: number) {
        this._id_offer = value;
    }

    get id_employer(): number {
        return this._id_employer;
    }

    set id_employer(value: number) {
        this._id_employer = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get keywords(): string {
        return this._keywords;
    }

    set keywords(value: string) {
        this._keywords = value;
    }

    get start_date(): Date {
        return this._start_date;
    }

    set start_date(value: Date) {
        this._start_date = value;
    }

    get end_date(): Date {
        return this._end_date;
    }

    set end_date(value: Date) {
        this._end_date = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get city_code(): number {
        return this._city_code;
    }

    set city_code(value: number) {
        this._city_code = value;
    }

    get nb_positions(): number {
        return this._nb_positions;
    }

    set nb_positions(value: number) {
        this._nb_positions = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }

    get advantage(): string {
        return this._advantage;
    }

    set advantage(value: string) {
        this._advantage = value;
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

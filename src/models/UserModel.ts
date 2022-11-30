export class UserModel {
    private _id_user : number;
    private _firstname : string;
    private _lastname : string;
    private _email : string;
    private _city : string;
    private _city_code : number;
    private _work_field : string;
    private _cv_link : string;


    constructor(id_user: number, firstname: string, lastname: string, email: string, city: string, city_code: number, work_field: string, cv_link: string) {
        this._id_user = id_user;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._city = city;
        this._city_code = city_code;
        this._work_field = work_field;
        this._cv_link = cv_link;
    }


    get id_user(): number {
        return this._id_user;
    }

    set id_user(value: number) {
        this._id_user = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
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

    get work_field(): string {
        return this._work_field;
    }

    set work_field(value: string) {
        this._work_field = value;
    }

    get cv_link(): string {
        return this._cv_link;
    }

    set cv_link(value: string) {
        this._cv_link = value;
    }
}
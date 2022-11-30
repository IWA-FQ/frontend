export class UserModel {
    id_user : number;
    firstname : string;
    lastname : string;
    email : string;
    city : string;
    city_code : number;
    work_field : string;
    cv_link : string;

    constructor(id_user: number, firstname: string, lastname: string, email: string, city: string, city_code: number, work_field: string, cv_link: string) {
        this.id_user = id_user;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.city = city;
        this.city_code = city_code;
        this.work_field = work_field;
        this.cv_link = cv_link;
    }
}
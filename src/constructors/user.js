import { convertMonthToNumber } from "../components/registration";

export class User {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.passConfirm = user.passConfirm;
        this.birthDate = `${user.year}-${convertMonthToNumber(user.month) < 10 ? '0' + convertMonthToNumber(user.month) : convertMonthToNumber(user.month)}-${user.day < 10 ? '0'+user.day : user.day}`;
    }

}
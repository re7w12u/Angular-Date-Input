import * as moment from 'moment';

export class NgDate {

    date: any;

    constructor(dateString:string) {
        this.dateInput = dateString;
    }

    set dateInput(e) {
        if (e != "") {
            var momentDate = moment(e, moment.ISO_8601).toDate();
            this.date = momentDate;
        }
        else {
            this.date = null;
        }
    }

    get dateInput() {
        if(this.date == null)
        {
            return "";
        }

        var stringToReturn = moment(this.date).format().substring(0, 10);
        return stringToReturn;
    }
}

export class NgDate1 {

    date: Date;

    constructor(d:Date) {
        this.date = d;
    }

    set dateInput(e) {
        if (e != "") {
            var momentDate = moment(e, moment.ISO_8601).toDate();
            this.date = momentDate;
        }
        else {
            this.date = null;
        }
    }

    get dateInput() {
        if(this.date == null)
        {
            return "";
        }

        var stringToReturn = moment(this.date).format().substring(0, 10);
        return stringToReturn;
    }
}
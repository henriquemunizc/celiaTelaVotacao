import { Injectable } from '@angular/core';


@Injectable()
export class DateService {

    constructor() {
        this.converterDate();
    }

    converterDate() {

        Date.prototype.toJSON = function() {

            return this.getFullYear() + '-' +
                ('0' + (this.getMonth() + 1)).slice(-2) + '-' +
                ('0' + this.getDate()).slice(-2) + 'T' +
                ('0' + this.getHours()).slice(-2) + ':' +
                ('0' + this.getMinutes()).slice(-2) + ':' +
                ('0' + this.getSeconds()).slice(-2) + '.' +
                ('00' + this.getMilliseconds()).slice(-3);
        };
    }


}

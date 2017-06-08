import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'humanDate'
})
export class HumanDatePipe implements PipeTransform {

 transform(value: any, args?: any): any {
        return moment(value).locale('fr').format('DD/MM/YYYY');
    }

}

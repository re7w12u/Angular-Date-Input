import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import * as moment from 'moment';

declare var $: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

    @ViewChild('inputdate') input: ElementRef;
    @Input() date: Date;
    @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
      $(this.input.nativeElement).datepicker("option", $.datepicker.regional[ "fr" ]);
        $(this.input.nativeElement).datepicker({
            onSelect: (d) => {
                this.date = $.datepicker.parseDate('dd/mm/yy',d);
                this.date.setHours(this.date.getHours() + 2);
                this.dateChange.emit(this.date);
            }
        });
    }

    parseDate(input, format?) {
      format = format || 'mm/dd/yyyy'; // default format
      var parts = input.match(/(\d+)/g), 
      i = 0, fmt = {};
      // extract date-part indexes from the format
      format.replace(/(yyyy|dd|mm)/g, function(part) {
         console.table(fmt);
         fmt[part] = i++; 
        });

      return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
    }

}

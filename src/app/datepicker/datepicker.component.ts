import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';

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
                this.date = new Date(d);
                this.date.setHours(this.date.getHours() + 2);
                this.dateChange.emit(this.date);
            }
        });
    }

}

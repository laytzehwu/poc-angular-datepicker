import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bootstrap-basic-datepicker',
  templateUrl: './basic-datepicker.component.html',
  styleUrls: []
})
export class BasicDatepickerComponent implements OnInit {

  model: NgbDateStruct;

  constructor(private calender: NgbCalendar) { }

  ngOnInit(): void {
  }

}

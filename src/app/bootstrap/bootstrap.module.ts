import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';
import { PopUpCalendarComponent } from './pop-up-calendar/pop-up-calendar.component';

@NgModule({
  declarations: [BasicDatepickerComponent, PopUpCalendarComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    BasicDatepickerComponent,
    PopUpCalendarComponent
  ]
})
export class BootstrapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';

@NgModule({
  declarations: [BasicDatepickerComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [BasicDatepickerComponent]
})
export class BootstrapModule { }

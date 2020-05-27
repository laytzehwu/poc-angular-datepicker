import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';

@NgModule({
  declarations: [BasicDatepickerComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicDatepickerComponent]
})
export class BootstrapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    DisplayComponent,
    AddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddComponent,
    DisplayComponent,

  ]
})
export class StudentModule { }

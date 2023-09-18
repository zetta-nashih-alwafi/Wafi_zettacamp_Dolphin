import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemFormComponent } from './add-item-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddItemFormComponent
  ], exports: [
    AddItemFormComponent
  ]
})
export class AddItemFormModule { }

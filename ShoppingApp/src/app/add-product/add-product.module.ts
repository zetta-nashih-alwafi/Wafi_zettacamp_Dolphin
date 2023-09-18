import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    AddProductComponent
  ]
})
export class AddProductModule { }

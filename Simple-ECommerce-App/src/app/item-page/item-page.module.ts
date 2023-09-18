import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    ItemPageComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ], exports: [
    ItemPageComponent
  ]
})
export class ItemPageModule { }

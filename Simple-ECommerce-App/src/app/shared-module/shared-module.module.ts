import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ItemCardComponent } from './item-card/item-card.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    ItemCardComponent
  ], exports: [
    NavigationBarComponent,
    ItemCardComponent
  ]
})
export class SharedModuleModule { }

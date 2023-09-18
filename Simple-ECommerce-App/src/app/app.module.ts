import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemPageModule } from './item-page/item-page.module';
import { AddItemFormModule } from './add-item-form/add-item-form.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ItemPageModule,
    AddItemFormModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

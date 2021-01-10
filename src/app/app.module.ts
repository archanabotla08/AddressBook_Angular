import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@angular/cli/bin/AddressBook/src/app/components/header/header.component';
import { FormComponent } from '@angular/cli/bin/AddressBook/src/app/components/form/form.component';
import { HomeComponent } from '@angular/cli/bin/AddressBook/src/app/components/home/home.component';
import { HttpClientModule } from '@angular/cli/bin/AddressBook/node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/cli/bin/AddressBook/node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

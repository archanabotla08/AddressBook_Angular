
import { FormComponent } from '@angular/cli/bin/AddressBook/src/app/components/form/form.component';
import { HomeComponent } from '@angular/cli/bin/AddressBook/src/app/components/home/home.component';
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  }, {
    path: 'addressBookForm',
    component: FormComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

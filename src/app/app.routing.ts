import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { TransactionComponent } from './transaction';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'transaction', component: TransactionComponent
  },
];
export const appRoutingModule = RouterModule.forRoot(routes);


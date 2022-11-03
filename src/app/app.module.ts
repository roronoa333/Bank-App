import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyButtonDirective } from './button.directive';
import { ButtonComponent } from './button/button.component';
import { appRoutingModule } from './app.routing';
import { TransactionComponent } from './transaction';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, appRoutingModule],
  declarations: [ AppComponent, HomeComponent , MyButtonDirective, ButtonComponent, TransactionComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }


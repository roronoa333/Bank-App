import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  amount;
  NewRows:any[] = [];
  result;
  addRow() {
    
  }
  Deposit() {
    if (this.amount != undefined){
      if (this.result == undefined){
        this.result = this.amount;
      }
      else if (this.result != undefined){
        this.result = this.result + this.amount;
      }
      this.NewRows.push({
        DateAndTime : new Date().toLocaleString(),
        TypeOfTransaction : "Deposit",
        Amount : this.amount,
        Balance : this.result
      })
      this.amount = 0;
    }
  }
  Withdraw() {
      if (this.amount != undefined){
        if (this.result == undefined){
          this.result = -this.amount;
        }
        else if (this.result != undefined){
          this.result = this.result - this.amount;
        }
      }
      this.NewRows.push({
        DateAndTime : new Date().toLocaleString(),
        TypeOfTransaction : "Withdraw",
        Amount : this.amount,
        Balance : this.result
      })
      this.amount = 0;
    }
  }

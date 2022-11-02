import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Verisk Banking Application";
  amount;
  result;
  Deposit() {
    var num = parseInt(this.amount);
    console.log(this.amount)
    if (this.amount != undefined){
      if (this.result == undefined){
        this.result = num;
      }
      else if (this.result != undefined){
        this.result = this.result + num;
      }
    }
  }
  Withdraw() {
    var num = parseInt(this.amount);
      if (this.amount != undefined){
        if (this.result == undefined){
          this.result = -num;
        }
        else if (this.result != undefined){
          this.result = this.result - num;
        }
      }
    }
  }

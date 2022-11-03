import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private shared: SharedService) {}
  amount;
  NewRows: any[] = [];
  string_result: any = localStorage.getItem('result');
  result:number = this.shared.getBalance();

  Deposit() {
    if (this.amount != undefined) {
      if (this.result == undefined) {
        this.result = parseFloat(this.amount);
      } else if (this.result != undefined) {
        this.result = this.result + parseFloat(this.amount);
      }
      this.NewRows.unshift({
        DateAndTime: new Date().toLocaleString(),
        TypeOfTransaction: 'Deposit',
        Amount: '$' + this.amount,
        Balance:
          '$' +
          parseFloat(this.result.toFixed(2)).toString(),
      });
      this.amount = 0;
      this.store();
    }
  }
  Withdraw() {
    if (this.amount != undefined) {
      if (this.result == undefined) {
        this.result = -this.amount;
      } else if (this.result != undefined) {
        this.result = this.result - this.amount;
      }
    }
    if (this.result < 0){
      alert("Notification : Please check that your Balance is Negetive.");
    }
    this.NewRows.unshift({
      DateAndTime: new Date().toLocaleString(),
      TypeOfTransaction: 'Withdraw',
      Amount: '$' + this.amount,
      Balance:
        '$' +
        (this.result % 1 ? this.result.toFixed(2) : this.result).toString(),
    });
    this.amount = 0;
    this.store();
  }

  store(): void {
    this.shared.setData(this.NewRows);
    this.shared.setBalance(this.result);
  }
}

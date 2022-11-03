import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../shared/shared.service';

@Component({
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {
  NewRows: any[];
  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.NewRows = this.shared.getData();
  }
}

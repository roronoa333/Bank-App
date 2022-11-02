import { Component, OnInit, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: '[c-button]',
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonComponent implements OnInit {
  @Output('click') clickEvent = new EventEmitter(true);

  @HostListener('click', ['$event'])
  Deposit($event) {
    console.log('c-button');
    // $event.preventDefault();
    // $event.stopImmediatePropagation(); 
  }

  @HostBinding('disabled') disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'button[my-button]'
})
export class MyButtonDirective {
  @Output('click') clickEvent = new EventEmitter(true);

  @HostListener('click', ['$event'])
  Deposit($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }
}
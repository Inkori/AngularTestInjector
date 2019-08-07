import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTableCheckbox]'
})

export class TableCheckboxDirective implements OnInit {
  checkbox;
  constructor(public el: ElementRef) {}
  ngOnInit() {
    this.checkbox = this.el.nativeElement;
  }
}

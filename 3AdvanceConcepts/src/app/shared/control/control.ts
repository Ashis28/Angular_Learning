import { Component, ElementRef, Host, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation : ViewEncapsulation.None,
  host : {
    class : 'control',
    // '(click)': 'onClick()'
  }
})
export class Control {
  // @HostBinding('class') className = 'control';
  label = input.required<string>()

  private el = inject(ElementRef);

  @HostListener('click') onCilck(){
    console.log("clicked");
    console.log(this.el);
  }
}

import { Component, Host, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation : ViewEncapsulation.None,
  host : {
    class : "control",
  }
})
export class Control {
  label = input.required<string>()
}

import { AfterContentInit, AfterViewInit, Component, contentChild, ContentChild, ElementRef, Host, HostBinding, HostListener, inject, input, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
export class Control implements OnInit, AfterViewInit, AfterContentInit{
  // @HostBinding('class') className = 'control';
  label = input.required<string>()

  @ContentChild('inpute') private control? : ElementRef<HTMLAreaElement> | ElementRef<HTMLTextAreaElement> ;
  // private control = contentChild<ElementRef<HTMLAreaElement | HTMLTextAreaElement>>('inpute');
  private el = inject(ElementRef);

  @HostListener('click') onCilck(){
    console.log("clicked");
    console.log(this.el);
    console.log("is this getting printed " + this.control);
  }
  ngOnInit(): void {
    console.log("control class ngOnInit " + this.control);
  }
  ngAfterViewInit(): void {
    console.log("control class afterViewInit " + this.control?.nativeElement);
  }
  ngAfterContentInit(): void {
    console.log("control class afterContentInit " + this.control?.nativeElement);
  }
  // ngOnChange(){
  //   console.log("is this getting printed " + this.control?.nativeElement.textContent);
  // }
}

import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button,Control,FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit,AfterViewInit{
  // @ViewChild('form') form? : ElementRef<HTMLFormElement>;
    // @ViewChild('form') private form? : ElementRef<HTMLFormElement>;
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    enteredTitle : string = ""
    enteredText : string = ""

    add = output<{title : string , text : string}>();

  // onSubmit(titleElement : string,textArea : string){
  //   // console.dir(titleElement+ textArea);
  //   this.add.emit({title : titleElement, text : textArea})
  //   this.form()?.nativeElement.reset();
  // }
  onSubmit(){
    // console.dir(titleElement+ textArea);
    this.add.emit({title : this.enteredTitle, text : this.enteredText})
    this.enteredText = "";
    this.enteredTitle = "";
  }

  ngOnInit(): void {
    console.log("is ngOnInit " + this.form()?.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    console.log("is afterViewInit " + this.form()?.nativeElement.textContent);
  }
}

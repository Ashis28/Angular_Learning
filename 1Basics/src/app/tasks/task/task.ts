import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TaskInterface{
  id : string;
  userId : string;
  title : string;
  summary : string;
  dueDate : string;
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task! : TaskInterface;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}

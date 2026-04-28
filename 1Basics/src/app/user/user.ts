import { Component,Input, input, computed, Output, EventEmitter, output} from '@angular/core';
import { user } from './user.model';
import { required } from '@angular/forms/signals';
import { Card } from '../shared/card/card';

// type user = {
//     id : string;
//     name : string;
//     avatar : string;
//   };

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  @Input() user! : user;
  @Input({required : true}) selected! : boolean;
  @Output() select = new EventEmitter();
  // select = output<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // avtar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>'assets/users/'+this.avtar())
  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user';
import { Tasks } from "./tasks/tasks";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1Basics');
  user = DUMMY_USERS;

  selectedUserId?:string;
  get selectedUser(){
    return this.user.find((users)=>users.id===this.selectedUserId)!;
  }
  onSelectUser(id:string){
    console.log("user "+ id +" clicked nehhh");
    this.selectedUserId = id;
  }
}

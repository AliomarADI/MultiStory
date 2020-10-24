import { Component, OnInit } from '@angular/core';
import {findLast} from '@angular/compiler/src/directive_resolver';
import {User} from '../users/user';
import {UsersService} from '../Services/users.service';
import {MessageService} from '../Services/message.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  emailAsNameSaved: '';

  users: User[];
  hideUsers = false;
  count: number;

  getUsers(){
    this.users = this.UsersServe.getUsers();
  }

  register(name: string){
      this.getUsers();
      this.count = this.users.length;
      this.UsersServe.getUsers().push(new User(this.users.length+1,name,null,null));
      this.Message.print(" " + name + " Created");
      this.Message.print('Count of users: '  + this.users.length + " ");

  }



  constructor(private UsersServe: UsersService,private  Message: MessageService) { }

  ngOnInit(): void {
  }

}

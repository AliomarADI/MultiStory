import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../Services/users.service';
import {User} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  SearchStr = '';

  constructor(private UserServe: UsersService) { }

  @Input()
  users: User[];

  getUsers(){
    this.users = this.UserServe.getUsers();
  }

  hideUsers(){
    this.users = []
  }


  ngOnInit(): void {
  }

}

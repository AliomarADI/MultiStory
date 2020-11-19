import {Component, OnInit, ViewChild} from '@angular/core';
import {findLast} from '@angular/compiler/src/directive_resolver';
import {User} from '../users/user';
import {UsersService} from '../Services/users.service';
import {MessageService} from '../Services/message.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  emailAsNameSaved: '';
  dliaPrikola: '';
  str = '';

  users: User[];
  hideUsers = false;
  count: number;

  // для guards
  @ViewChild('userForm')
  private userForm: NgForm;


  // register take array from standart array
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

  public hasUnsavedData():boolean{
    if(this.emailAsNameSaved == this.dliaPrikola){
      return false; // не заполнен, нет преграды
    }
    return true;
  }






  constructor(private UsersServe: UsersService,private  Message: MessageService) { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import {User} from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [

    new User(1,'Sher Andrey',23,''),
    new User(2,'Nazarev Evfimiy',23,''),
    new User(3,'Mike Tyson',23,''),
    new User(4,'Александр Македонский',23,''),
    new User(5,'Деметрий Фалерский',23,''),
    new User(6,'Гиппократ Хиосский',23,''),

  ];


  getUsers(){
    return this.users;
  }

  constructor() { }
}

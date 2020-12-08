import { Injectable } from '@angular/core';
import {User} from '../users/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [

    new User(1,'Sher Andrey',23,''),
    new User(2,'Nazarev Evfimiy',24,''),
    new User(3,'Mike Tyson',27,''),
    new User(4,'Александр Македонский',33,''),
    new User(5,'Деметрий Фалерский',17,''),
    new User(6,'Гиппократ Хиосский',99,''),

  ];


  getUsers(){
    return this.users;
  }

  constructor() {

  }
}

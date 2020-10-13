import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  SearchStr = '';

  constructor() { }

  users = [
    {name: 'Sher Andrey'},
    {name: 'Nazarev Evfimiy'},
    {name: 'Mike Tyson'},
    {name: 'Александр Македонский'},
    {name: 'Деметрий Фалерский'},
    {name: 'Гиппократ Хиосский'},
  ];


  ngOnInit(): void {
  }

}

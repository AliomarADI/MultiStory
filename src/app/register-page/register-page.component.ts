import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  usersReg: ['Any', 'Hello'];
  isDisplayReg = false ;
  isDisplayUser =  true;

  // tslint:disable-next-line:typedef
  registerClick(){
    this.isDisplayUser = !this.registerClick;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

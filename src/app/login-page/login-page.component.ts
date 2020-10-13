import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfilePageComponent} from '../profile-page/profile-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  // profilePage(){
  //   this.router.navigateByUrl('/profile');
  // }
}

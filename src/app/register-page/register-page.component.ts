import { Component, OnInit } from '@angular/core';
import {findLast} from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {



  displayReg = true;
  displayUser = false;
  createUser = '';
  jai = '';

  constructor() { }

  ngOnInit(): void {
  }


  displayButton() {
    this.displayReg = false;
    this.displayUser = true;
  }
}

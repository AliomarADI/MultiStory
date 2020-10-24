import { Component, OnInit } from '@angular/core';
import {IdeasService} from '../Services/ideas.service';
import { Ideas } from './ideas';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {

  ideas: Ideas[];


  getIdeas(){
    this.ideas = this.IdeasServe.ideas;
  }


  constructor(private IdeasServe: IdeasService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Ideas} from '../my-ideas/ideas';
import {HttpClient} from '@angular/common/http';
import {RequestsTestService} from '../Services/requests-test.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class POSTSComponent implements OnInit {
  constructor(private res: RequestsTestService) { }

  http1: HttpClient;
  name: string;
  description: string;
  id: number;

  receivedIdea: Ideas;
  ideas: Ideas[];

  columns = ["Id","Name","Description"];
  index = ["id", "name", "description"];

  getPosts(){
   this.res.getPosts().subscribe((data:Ideas[]) => this.ideas = data);

  }

  createPost(id: number, name: string, description: string){
    const idea = new Ideas(id,1,name,description);
    this.res.createPost(idea);
  }


  deletePost(idea: Ideas){
    this.res.delete(idea);
  }

  updatePost(){

  }

  ngOnInit(): void {
  }

}

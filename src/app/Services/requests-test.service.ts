import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ideas} from '../my-ideas/ideas';

@Injectable({
  providedIn: 'root'
})
export class RequestsTestService {

  constructor(private http: HttpClient) {}

  url: string = "http://localhost:3000/posts/";
  urlAsset: string = 'assets/db.json'

  getPosts() {
    return this.http.get(this.url);
  }


  createPost(idea: Ideas){
    return this.http.post<Ideas>('http://localhost:3000/posts', idea).subscribe(data=>
    {
      console.log(data);
    });
  }


  delete(idea: Ideas){
    return this.http.delete(this.url + idea.id);

  }

  }


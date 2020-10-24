import { Injectable } from '@angular/core';
import {Ideas} from '../my-ideas/ideas';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  ideas = [
    new Ideas(1, 1,'Builder','Some description1'),
    new Ideas(2, 1,'Light','Some description2'),
    new Ideas(3, 2,'Vision','Some description3'),
    new Ideas(4, 3,'IQtech','Some description4'),
  ]

  getIdeas(){
    return this.ideas;
  }

  constructor() { }
}

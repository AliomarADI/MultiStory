import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  print(message: String){
    console.log("From MessageService: " + message);
  }

  constructor() { }
}

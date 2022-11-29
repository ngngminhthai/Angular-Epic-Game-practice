import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 
  currentUser: string;

  userSubcribe = new Subject;


  constructor() { }

  login(username: string) {
    this.setCurrenUser(username);
    this.userSubcribe.next(this.currentUser);
  }
  logout() {
    this.currentUser = null;
    this.userSubcribe.next(this.currentUser);
  }

  setCurrenUser(username: string){
    this.currentUser = username;
  }

}

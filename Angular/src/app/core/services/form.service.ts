import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  constructor(private router: Router) { }

  searchContent: string;
  searchCategory: [] = [];
  isEmpty = false;
  isEntered = false;

  setContentInput(value: any) {
    this.searchContent = value;
  }

  navigateToSearchPage() {
    this.router.navigateByUrl("search&s=");
  }

  

}

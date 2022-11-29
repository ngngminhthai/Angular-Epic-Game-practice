import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import genres from 'src/app/shared/models/genres';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  prinfSearchInfo(){
    console.log("-------------------");
    
    console.log(this.category);
    console.log(this.contentSearch);
    console.log(this.pricingOrder);
  }

  setSearchCategory(cates: genres[]) {
    this.category = cates;
    this.prinfSearchInfo()
  }

  setContentSearch(content: string) {
    this.contentSearch = content;
    this.prinfSearchInfo()
  }

  setPricingOrder(order: number) {
    this.pricingOrder = order;
    this.prinfSearchInfo()
  }

  genres: genres[] = [];

  private _jsonURL = 'https://6363c2a937f2167d6f82aae1.mockapi.io/genres';

  constructor(private http: HttpClient) { }

  get getGenres() {
    return this.http.get<genres[]>(this._jsonURL);
  }

  category: genres[];
  contentSearch: string;
  pricingOrder: number = 1;

}

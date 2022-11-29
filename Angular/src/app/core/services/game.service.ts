import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import game from 'src/app/shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _jsonURL = 'https://6363c2a937f2167d6f82aae1.mockapi.io/stores';

  constructor(private http: HttpClient) { }

  get getGames() {
    return this.http.get<game[]>(this._jsonURL);
  }
  
}

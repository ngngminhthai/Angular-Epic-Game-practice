import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormService } from '../core/services/form.service';
import { GameService } from '../core/services/game.service';
import { SearchService } from '../core/services/search.service';
import game from '../shared/models/game';
import genres from '../shared/models/genres';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})
export class SearchGamesComponent implements OnInit {



  list: genres[];
  listGames: game[];
  gamesListRender: game[];
  gameListPagination: game[];
  startItem: number = 0;
  endItem: number = 6;
  total: number;


  category: genres[];
  contentSearch: string;
  pricingOrder: number = 1;

  handleSearchContent($event: any) {
    this.contentSearch = $event.target.value;
    // this.searchService.setContentSearch($event.target.value);
  }
  handlePricingOrder($event: any) {
    this.pricingOrder = +$event.target.value;
    // this.searchService.setPricingOrder($event.target.value);
  }

  shareCheckedList(item: any[]) {
    this.category = item;
    console.log(item);
    // this.searchService.setSearchCategory(item as genres[]);
  }
  shareIndividualCheckedList(item: {}) {
    // console.log(item);
  }
  applySearch() {
    console.log(this.pricingOrder);
    
    this.spinner.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

    let gamesList = this.listGames;
    for (const cate of this.category) {
      if (this.contentSearch != '') {
        gamesList = gamesList.filter(g => (g.genres.includes(cate) && g.title.toLowerCase().includes(this.contentSearch.toLowerCase())));
        if (this.pricingOrder === 1) gamesList.sort(function (a, b) { return a.price - b.price });
        else gamesList.sort(function (a, b) { return b.price - a.price });
      }
      else {
        gamesList = gamesList.filter(g => (g.genres.includes(cate) && g.title.toLowerCase().includes(this.contentSearch.toLowerCase())));
        if (this.pricingOrder === 1) gamesList.sort(function (a, b) { return a.price - b.price });
        else gamesList.sort(function (a, b) { return b.price - a.price });
      }

      console.log(gamesList);

    }
    this.gameListPagination = gamesList;
    this.total = this.gameListPagination.length;
    this.gamesListRender = gamesList.slice(0, 6);;
    // this.listGames.filter()
  }
  constructor(private spinner: NgxSpinnerService, private searchService: SearchService, private gameService: GameService, private formService: FormService) { }

  ngOnInit() {

    this.searchService.getGenres.subscribe(data => {
      this.list = data;
    })

    this.gameService.getGames.subscribe(games => {
      this.total = games.length;
      this.pricingOrder = 1;      
      this.contentSearch = '';
      console.log(this.contentSearch);
      
      this.category = [];

      this.listGames = games.sort(function (a, b) { return a.price - b.price });

      this.gamesListRender = this.listGames.slice(0, 6);

      this.applySearch();
    })


    /** spinner starts on init */
    this.spinner.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }


  pageChanged(event: PageChangedEvent): void {
    /** spinner starts on init */
    this.spinner.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    console.log("startItem", this.startItem);
    console.log("endItem", this.endItem);
    this.gamesListRender = this.gameListPagination.slice(this.startItem, this.endItem);
    console.log(this.gamesListRender);
    // this.returnedArray = this.contentArray.slice(startItem, endItem);
  }


}

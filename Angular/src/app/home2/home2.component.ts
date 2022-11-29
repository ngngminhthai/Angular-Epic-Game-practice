import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import game from '../shared/models/game';
import { GameService } from '../core/services/game.service';
import { CartService } from '../core/services/cart.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BusyService } from '../core/services/busy.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  games: game[] = [];
  renderPage: game[] = [];
  constructor(private spinner: NgxSpinnerService, private gameService: GameService, private cartService: CartService, private loading: BusyService) { }

  ngOnInit() {
    this.gameService.getGames.subscribe(data => {
      this.games = data;
      this.renderPage = this.games.slice(0, 6);
    })

  }


  addToCart(id: number) {
    this.cartService.addToCart(this.games.find(g => g.id === id));
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

    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    console.log("startItem", startItem);
    console.log("endItem", endItem);
    this.renderPage = this.games.slice(startItem, endItem);
    // this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}

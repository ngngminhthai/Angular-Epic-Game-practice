import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/core/services/game.service';
import game from 'src/app/shared/models/game';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private gameService: GameService, private bcService: BreadcrumbService) { }
  game: game;
  id: number;

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.gameService.getGames.subscribe(games => {
      this.game = games.find(g => g.id === this.id);
      this.bcService.set('@productDetails', this.game.title);
    })
    
  }

}

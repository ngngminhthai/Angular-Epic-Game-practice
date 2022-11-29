import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from './basket/basket.service';
import { AccountService } from './core/services/account.service';
import { CartService } from './core/services/cart.service';
import { FormService } from './core/services/form.service';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';
import { altKeys, ctrlKeys, ctrlShiftKeys, includes, inputKeys, keys, shiftKeys } from './utils/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkiNet';
  isLoginPage: boolean;

  constructor(private formService: FormService, private cartService: CartService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    window.addEventListener('keydown', this.onKeyDown.bind(this), true);

    console.log(window.location.href);
    if (window.location.href.indexOf("login") > 0) {
      this.isLoginPage = true;
    }
    else this.isLoginPage = false;
    this.cartService.loadCart();
    this.accountService.login("Nguyen Minh Thai");
  }

  onKeyDown(event: Event) {
    const myKey = (event as any).key;
    if (myKey === 'Enter') {
      this.formService.navigateToSearchPage();
    }
  }

}
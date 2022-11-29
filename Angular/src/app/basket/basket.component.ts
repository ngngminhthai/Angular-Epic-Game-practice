import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  cartItems = [];
  totalPrice: number;

  constructor(private basketService: BasketService, private cartService: CartService) { }

  ngOnInit(): void {
    // this.basket$ = this.basketService.basket$;
    this.cartItems = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;

    this.cartService.carItems.subscribe((items: []) => {      
      this.cartItems = items;
      this.totalPrice = this.cartService.totalPrice;
    })
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

  removeItem(item){
    this.cartService.removeItem(item);
  }

  decrementItem(item) {
    this.cartService.decreaseQuantity(item);
    // this.cartService.loadCart();
  }

  incrementItem(item) {
    this.cartService.increaseQuantity(item);
    // this.cartService.loadCart();
  }


}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { IBasket, IBasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;
  cartItems = [];
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.basket$ = this.basketService.basket$;
    this.cartItems = this.cartService.items;
    this.totalPrice = this.cartService.totalPrice;

    this.cartService.carItems.subscribe((items: []) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.totalPrice;
    })
  }



  removeItem(item) {
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

  reloadPage() {
    this.cartService.items.splice(0, this.cartService.items.length)
    window.localStorage.removeItem('cart_items')
    window.location.reload()
  }

}

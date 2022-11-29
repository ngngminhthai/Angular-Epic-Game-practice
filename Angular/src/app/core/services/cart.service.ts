import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() { }

  items = [];
  totalPrice: number = 0;
  cartNumber = new Subject
  carItems = new Subject
  cartLenght: number;

  addToCart(addedItem) {
    let item = this.items.find(i => addedItem.id === i.id)
    if (item != null)
      this.increaseQuantity(item);
    else {
      addedItem.quantity = 1;
      this.items.push(addedItem);
    }
    this.totalPrice += addedItem.price;
    this.saveCart();
  }

  increaseQuantity(item) {
    console.log(item);
    let increasedItem = this.items.find(i => i.id === item.id);
    increasedItem.quantity++;
    this.totalPrice += item.price;

    this.saveCart();
    this.loadCart();
    this.carItems.next(this.items);
  }


  decreaseQuantity(item) {
    console.log(item);
    let increasedItem = this.items.find(i => i.id === item.id);
    if (increasedItem.quantity - 1 === 0)
      this.removeItem(item);
    else
      increasedItem.quantity--;
    this.totalPrice -= item.price;
    this.saveCart();
    this.loadCart();
    this.carItems.next(this.items);
  }

  setCart() {

  }

  getItems() {
    return this.items;
  }

  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];
    this.cartLenght = this.items.length;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
    this.cartNumber.next(this.items.length)
  }

  clearCart(items) {
    this.items = [];
    localStorage.removeItem("cart_items");
  }

  removeItem(item) {
    const index = this.items.findIndex(o => o.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.totalPrice -= item.quantity * item.price;
    this.saveCart();
    this.loadCart();
    this.carItems.next(this.items);
  }

  itemInCart(item): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }
}

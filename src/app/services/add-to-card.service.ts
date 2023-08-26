import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  private cartKey = 'cart';
  constructor() {}
  addToCart(item: any) {
    const cartItems = this.getCartItems();
    cartItems.push(item);
    this.setCartItems(cartItems);
  }

  getCartItems(): any[] {
    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : [];
  }

  setCartItems(items: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }
}

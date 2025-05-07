import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addItem(item: any) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  removeItem(item: any) {
    const currentItems = this.cartItems.value.filter(cartItem => cartItem.id !== item.id);
    this.cartItems.next(currentItems);
  }

  updateItemQuantity(item: any, quantity: number) {
    const currentItems = this.cartItems.value.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    this.cartItems.next(currentItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartItems() {
    return this.cartItems.value;
  }
}

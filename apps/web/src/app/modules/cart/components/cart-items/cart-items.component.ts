import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  @Input() cartItems: any[] = [];

  updateQuantity(item: any, quantity: number) {
    item.quantity = quantity;
  }
}

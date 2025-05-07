import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.css']
})
export class ReviewOrderComponent {
  @Input() orderSummary: any;

  constructor() {}

  getTotalPrice(): number {
    return this.orderSummary.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  }
}

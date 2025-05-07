import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  @Input() subtotal: number = 0;
  @Input() tax: number = 0;
  @Input() shipping: number = 0;
  @Input() total: number = 0;

  calculateTotal() {
    this.total = this.subtotal + this.tax + this.shipping;
  }
}

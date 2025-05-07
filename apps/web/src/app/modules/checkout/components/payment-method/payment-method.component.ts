import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  paymentOptions = ['Credit Card', 'PayPal', 'Bank Transfer'];
  selectedPaymentOption: string | null = null;

  selectPaymentOption(option: string) {
    this.selectedPaymentOption = option;
  }
}

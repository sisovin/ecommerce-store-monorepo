import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ReviewOrderComponent } from './components/review-order/review-order.component';

const routes: Routes = [
  { path: 'address', component: AddressFormComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'review', component: ReviewOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

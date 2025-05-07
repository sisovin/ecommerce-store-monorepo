import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];
  filterForm: FormGroup;

  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      status: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  filterOrders(): void {
    const { status, startDate, endDate } = this.filterForm.value;
    this.orderService.getFilteredOrders(status, startDate, endDate).subscribe(orders => {
      this.orders = orders;
    });
  }
}

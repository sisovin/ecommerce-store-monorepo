import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filters: any = {};
  sortingOptions: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Fetch products and initialize filters and sorting options
  }

  filterProducts(): void {
    // Implement filtering logic here
  }

  sortProducts(): void {
    // Implement sorting logic here
  }
}

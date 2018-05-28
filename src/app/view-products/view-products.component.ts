import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  pList: Product[] = this.products.getAll();

  // Filters:
  fMinPrice:number;
  fMaxPrice : number;
  fMinAmount:number;
  fMaxAmount:number;

  filterProducts() {
    let filters = this;
    this.pList = this.products.getAll().filter(function(item:Product) { 
      return (!filters.fMinAmount || item.inStock >= filters.fMinAmount)
          && (!filters.fMinPrice || item.price >= filters.fMinPrice)
          && (!filters.fMaxPrice || item.price <= filters.fMaxPrice)
          && (!filters.fMaxAmount || item.inStock <= filters.fMaxAmount);
    })
  }

  constructor(private products: ProductsService) { }

  ngOnInit() {
  }



}

import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock.products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private productsList: Product[] = PRODUCTS;

  addProduct(pId, pName, pMinAmuont, pMaxAmount, pInStock, pPrice ) {
    if (this.productsList.findIndex(product => product.id === pId) == -1 ) {
      this.productsList.push(new Product(pId, pName, pMinAmuont, pMaxAmount, pInStock, pPrice));
    } else {
      return false;
    }
  }

  getAll():Product[] {
    return this.productsList.slice();
  }


}

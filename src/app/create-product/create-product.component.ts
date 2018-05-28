import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  id:number; name: string; minAmount:number; maxAmount: number; inStock: number; price: number;

  constructor(private products: ProductsService) { }

  ngOnInit() {
  }

  addProduct() {
    this.products.addProduct(this.id, this.name, this.minAmount, this.maxAmount, this.inStock, this.price);
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductItem} from "../model/ProductItem";
import {products, ProductService} from "../product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit{
  constructor(private productService : ProductService) {
  }
  products : any;
  ngOnInit(): void {
    this.products = this.productService.getAll().subscribe((response) => {this.products = response.products});
  }

  getStateColor(product : ProductItem) : {"state": string, "color": string}{
    if (product.isAvailable)
      return { state: "en stock", color: "green"};
    else
      return {state: "en rupture de stock", color: "red"};
  }

}


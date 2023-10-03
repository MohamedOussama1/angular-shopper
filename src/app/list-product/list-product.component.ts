import {Component, inject} from '@angular/core';
import {ProductItem} from "../model/ProductItem";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  constructor(private productService : ProductService) {
  }
  products : Array<ProductItem> = this.productService.getAll();
  getStateColor(product : ProductItem) : {"state": string, "color": string}{
    if (product.isAvailable)
      return { state: "en stock", color: "green"};
    else
      return {state: "en rupture de stock", color: "red"};
  }
}


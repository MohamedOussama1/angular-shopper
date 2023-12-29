import {Component, Output, OnInit} from '@angular/core';
import {ProductItem} from "../model/ProductItem";
import {ProductService} from "../product.service";
import {Search} from "../model/Search";

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
      this.productService.getAll().subscribe((response) => {this.products = response.products});
  }

  updateProducts($event : string) : void{
    console.log("updating products with " + $event);
    this.productService.getFilteredProducts($event).subscribe((response) => { this.products = response.products});
  }

  getStateColor(product : ProductItem) : {"state": string, "color": string}{
    if (product.isAvailable)
      return { state: "en stock", color: "green"};
    else
      return {state: "en rupture de stock", color: "red"};
  }

}


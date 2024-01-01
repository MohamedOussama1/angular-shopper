import {Component, Output, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {CartItem, Product} from "../model/cart.model";
import {CartService} from "../cart.service";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit{
  protected readonly faPlus = faPlus;
  constructor(private productService : ProductService,
              private cartService : CartService) {
  }
  products : any;
  ngOnInit(): void {
      this.productService.getAll().subscribe((response) => {this.products = response.products});
  }

  updateProducts(filters : {searchText : string, category : string}) : void{
    this.productService.getFilteredProducts(filters.searchText).subscribe((response) => {
      if (filters.category == "All")
        this.products = response.products;
      else
        this.products = response.products.filter((product : any) => product.category == filters.category)
    });
  }
  updateCategory(category : string) : void {
    if (category == "All")
      this.productService.getAll().subscribe((response) => {this.products = response.products});
    else
      this.productService.getProductsByCategory(category).subscribe((response) => this.products = response.products);
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product,
      quantity: 1

    });
  }

  getStateColor(product : Product) : {"state": string, "color": string}{
    if (product.isAvailable)
      return { state: "en stock", color: "green"};
    else
      return {state: "en rupture de stock", color: "red"};
  }

  protected readonly faMinus = faMinus;
}


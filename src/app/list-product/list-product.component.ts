import {Component, Output, OnInit, Input} from '@angular/core';
import {ProductService} from "../product.service";
import {CartItem, Product} from "../model/cart.model";
import {CartService} from "../cart.service";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit{
  products : any;
  @Input() events: {text: Observable<{searchText: string, category: string}>, category: Observable<string>};

  constructor(private productService : ProductService,
              private cartService : CartService) {
  }
  ngOnInit(): void {
      this.productService.getAll().subscribe((response) => {this.products = response.products});
      this.events.text.subscribe((filters) => this.updateProducts(filters));
      this.events.category.subscribe((category) => this.updateCategory(category));
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
      id : undefined,
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


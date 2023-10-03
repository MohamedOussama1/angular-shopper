import {Component, numberAttribute} from '@angular/core';
import {CartService} from "../cart.service";
import {ProductItem} from "../model/ProductItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService : CartService) {
  }
  items : Array<ProductItem> = this.cartService.getAll();

  getTotal(items: Array<ProductItem>) : number{
    return items.
    map(
      (item) => item.price * item.quantity
    ).reduce((price1, price2) => price1 + price2, 0)
  }
}

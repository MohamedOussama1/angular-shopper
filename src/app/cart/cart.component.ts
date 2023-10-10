import {Component, numberAttribute} from '@angular/core';
import {CartService} from "../cart.service";
import {ProductItem} from "../model/ProductItem";
import {CartItem} from "../model/CartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService : CartService) {
  }
  items : Array<CartItem> = this.cartService.getAll();

  getTotal(items: Array<CartItem>) : number{
    return items.
    map(
      (item) => item.product.price * item.quantity
    ).reduce((price1, price2) => price1 + price2, 0)
  }
}

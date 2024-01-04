import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Cart, CartItem} from "../model/cart.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart : Cart;
  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.cart$.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

  getNumberOfItems() : number {
    return this.cartService.getNumberOfItems(this.cart.items);
  }


  // onCheckout(): void {
  //   this.http
  //     .post('http://localhost:4242/checkout', {
  //       items: this.cart?.items,
  //     })
  //     .subscribe(async (res: any) => {
  //     });
  //
  ngOnDestroy() {
    // if (this.cartSubscription) {
    //   this.cartSubscription.unsubscribe();
    // }
  }
}

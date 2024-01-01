import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Cart, CartItem} from "../model/cart.model";
import {faCartPlus, faPlus, faMinus, faTimes, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  faCartPlus = faCartPlus;
  faTrashCan = faTrashCan
  cart : Cart | undefined;
  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe((_cart) => {
      this.cart = _cart;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  // onRemoveFromCart(item: CartItem): void {
  //   this.cartService.removeFromCart(item);
  // }
  //
  // onRemoveQuantity(item: CartItem): void {
  //   this.cartService.removeQuantity(item);
  // }
  //
  // onClearCart(): void {
  //   this.cartService.clearCart();
  // }
  //
  // onCheckout(): void {
  //   this.http
  //     .post('http://localhost:4242/checkout', {
  //       items: this.cart?.items,
  //     })
  //     .subscribe(async (res: any) => {
  //     });
  // }
  //
  ngOnDestroy() {
    // if (this.cartSubscription) {
    //   this.cartSubscription.unsubscribe();
    // }
  }
}

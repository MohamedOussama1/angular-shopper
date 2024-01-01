import { Injectable } from '@angular/core';
import {Cart, CartItem} from "./model/cart.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey: string = 'cartItem';
  cart : Cart = {items : []}
  cartSubject = new BehaviorSubject<Cart>(this.cart);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.cart = JSON.parse(sessionStorage.getItem(this.storageKey) || '{"items":[]}');
    this.cartSubject.next(this.cart);
  }

  addToCart(item: CartItem): void {
    const itemInCart = this.cart.items.find((_item) => _item.product.id === item.product.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      this.cart.items.push(item);
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    }
    this.cartSubject.next(this.cart);
  }

  // removeFromCart(item: CartItem, updateCart = true): CartItem[] {
  //   const filteredItems = this.cart.value.items.filter(
  //     (_item) => _item.product.id !== item.product.id
  //   );
  //
  //   if (updateCart) {
  //     this.cart.next({ items: filteredItems });
  //   }
  //
  //   return filteredItems;
  // }
  //
  // removeQuantity(item: CartItem): void {
  //   let itemForRemoval!: CartItem;
  //
  //   let filteredItems = this.cart.value.items.map((_item) => {
  //     if (_item.product.id === item.product.id) {
  //       _item.quantity--;
  //       if (_item.quantity === 0) {
  //         itemForRemoval = _item;
  //       }
  //     }
  //
  //     return _item;
  //   });
  //
  //   if (itemForRemoval) {
  //     filteredItems = this.removeFromCart(itemForRemoval, false);
  //   }
  //
  //   this.cart.next({ items: filteredItems });
  // }
  //
  // clearCart(): void {
  //   this.cart.next({ items: [] });
  // }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.product.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}

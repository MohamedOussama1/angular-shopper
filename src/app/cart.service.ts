import { Injectable } from '@angular/core';
import {Cart, CartItem, Order, OrderDto, Product} from "./model/cart.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageKey: string = 'cartItem';
  cart : Cart = {items : []}
  cartSubject = new BehaviorSubject<Cart>(this.cart);
  cart$ = this.cartSubject.asObservable();
  constructor(private http : HttpClient) {
    this.cart = JSON.parse(sessionStorage.getItem(this.storageKey) || '{"items":[]}');
    this.cartSubject.next(this.cart);
  }
  addToCart(item: CartItem): void {
    const itemInCart = this.cart.items.find((_item) => _item.product?.id === item.product?.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      this.cart.items.push(item);
    }
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }
  removeFromCart(item: CartItem): CartItem[] {
    const filteredItems = this.cart.items.filter(
      (_item) => _item.product?.id !== item.product?.id
    );
    console.log("filtered items:" + filteredItems);
    this.cart.items = filteredItems;
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;
    let filteredItems = this.cart.items.map((_item) => {
      if (_item.product?.id === item.product?.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          console.log("remove");
          itemForRemoval = _item;
        }
      }
      return _item;
    });
    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval);
    }
    this.cartSubject.next({ items: filteredItems });
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }

  clearCart(): void {
    this.cartSubject.next({ items: [] });
    this.cart = {items : []};
    sessionStorage.removeItem(this.storageKey);
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.product?.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  getNumberOfItems(items : CartItem[]) : number {
    return items
      .reduce((prev, current) => prev + current.quantity, 0);
  }

  createOrder(order : OrderDto) {
    return this.http.post("http://localhost:8080/orders/", order);
  }
}

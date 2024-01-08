import {Component, OnChanges, OnDestroy, OnInit, signal} from '@angular/core';
import {CartService} from "../cart.service";
import {Cart, CartItem, Order} from "../model/cart.model";
import {Subscription} from "rxjs";
import {User} from "../model/User";
import {ProductService} from "../product.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  cart : Cart;
  user : User | undefined;
  constructor(private cartService: CartService,
              private userService : UserService) {
  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe((_cart) => this.cart = _cart);
    this.userService.user$.subscribe((_user) => this.user = _user);
  }
  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

  getNumberOfItems() : number {
    return this.cartService.getNumberOfItems(this.cart.items);
  }

  onRegisterCart(){
    let today : Date | string = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const order : Order = {id : undefined, user : this.user, orderDetails : this.cart.items, date : new Date(today)}
    this.cartService.createOrder(order).subscribe((response) => console.log(response));
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
  }
}

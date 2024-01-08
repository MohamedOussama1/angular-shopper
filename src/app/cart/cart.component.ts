import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Cart, CartItem, CartItemDto, Order, OrderDto} from "../model/cart.model";
import {User} from "../model/User";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  cart : Cart;
  user : User | undefined;
  constructor(private cartService: CartService,
              private userService : UserService,
              private router : Router) {
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
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }
    if (!(this.cart.items.length)) {
      this.router.navigate(['home'])
      return;
    }
    let today : Date | string = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let cartItemsDto : Array<CartItemDto> = this.cart.items.map((cartItem) =>
      new CartItemDto(cartItem.id, cartItem.product.id, cartItem.quantity)
    )
    const order : OrderDto = {id : undefined, userId : this.user.id, orderDetails : cartItemsDto, date : new Date(today)}
    this.cartService.createOrder(order).subscribe((response) => {
      if (this.user) {
        this.router.navigate(['orders']);
        console.log(this.user.id)
        this.cartService.clearCart();
      }
    });
  }
  ngOnDestroy() {
  }
}

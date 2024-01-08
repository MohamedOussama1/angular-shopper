import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {CartItem} from "../model/cart.model";
import {CartService} from "../cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

    protected readonly faPlus = faPlus;
    protected readonly faMinus = faMinus;
    protected readonly faTimes = faTimes;
    @Input()
    cartItem : CartItem;
    cartSubscription : Subscription;
    cartQty : number | undefined;
  constructor(private cartService : CartService) {}
  ngOnInit(): void {
    this.cartQty = 0;
    this.cartSubscription = this.cartService.cart$.subscribe((_cart) => {
      const itemInCart = _cart.items.find(cartItem => cartItem.product.id == this.cartItem.product.id);
      if (itemInCart)
        this.cartQty = itemInCart.quantity;
    });
  }
  onAddToCart(): void {
    this.cartService.addToCart({
      id : undefined,
      product: this.cartItem.product,
      quantity: 1
    });
  }
  onRemoveFromCart(): void {
    this.cartService.removeQuantity({
      id : undefined,
      product: this.cartItem.product,
      quantity: 1
    });
  }

  onRemoveAllFromCart(): void {
    this.cartService.removeFromCart(this.cartItem);
  }

}

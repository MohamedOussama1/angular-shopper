import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {CartItem} from "../model/cart.model";

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
    cartItem? : CartItem | undefined;
    @Output() addToCart = new EventEmitter();
  constructor() {}
  onAddToCart(): void {
    this.addToCart.emit(this.cartItem);
  }
}

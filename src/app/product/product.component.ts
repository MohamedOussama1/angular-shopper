import {Component, Input, OnInit} from '@angular/core';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Product} from "../model/cart.model";
import {ProductService} from "../product.service";
import {CartService} from "../cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;

  @Input()
  product: any;
  productSubscription : Subscription | undefined;
  cartQty : number | undefined;
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
    this.productSubscription = this.cartService.cart$.subscribe((_cart) => {
      const productInCart = _cart.items.find(cartItem => cartItem.product?.id == this.product.id);
      if (productInCart) {
        this.cartQty = productInCart.quantity;
      }else
        this.cartQty = 0;
    });
  }
  onAddToCart(): void {
    this.cartService.addToCart({
      product: this.product,
      quantity: 1
    });
  }
  onRemoveFromCart(): void {
    this.cartService.removeQuantity({
      product: this.product,
      quantity: 1
    });
  }

  // onRemoveQuantity(item: CartItem): void {
  //   this.cartService.removeQuantity(item);
  // }
  //
}

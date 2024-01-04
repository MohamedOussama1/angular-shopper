import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../cart.service";
import {Subscription} from "rxjs";
import {CartItem} from "../model/cart.model";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;
  cartItem : CartItem;
  mainImage : any | undefined;
  productSubscription : Subscription | undefined;
  cartQty : number;
  constructor(private route : ActivatedRoute,
              private productService : ProductService,
              private cartService :CartService) {
    this.route.params.subscribe(params => {
      const id : number = params['id'];
      this.productService.getProductById(id).subscribe((product) => {
        this.cartItem = {product : product, quantity : this.cartQty};
        this.mainImage = this.cartItem.product.thumbnail});
    })
  }
  ngOnInit(): void {
    this.cartQty = 0;
    this.productSubscription = this.cartService.cart$.subscribe((_cart) => {
      const itemInCart = _cart.items.find(cartItem => cartItem.product?.id == this.cartItem.product.id);
      if (itemInCart) {
        this.cartQty = itemInCart.quantity;
        this.cartItem.product = itemInCart.product;
      }
    });
    }
  setMainImage(image: string) {
    this.mainImage = image;
  }
  onAddToCart(): void {
    this.cartService.addToCart({
      product: this.cartItem.product,
      quantity: 1
    });
  }
  onRemoveFromCart(): void {
    this.cartService.removeQuantity({
      product: this.cartItem.product,
      quantity: 1
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../cart.service";
import {Subscription} from "rxjs";
import {CartItem, Product} from "../model/cart.model";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;
  cartItem : CartItem;
  product : Product;
  comments : any;
  mainImage : any | undefined;
  cartSubscription : Subscription;
  cartQty = 0;
  constructor(private route : ActivatedRoute,
              private productService : ProductService,
              private cartService :CartService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.mainImage = product.thumbnail;
        this.cartSubscription = this.cartService.cart$.subscribe((_cart) => {
          const itemInCart = _cart.items.find(cartItem => cartItem.product.id == this.product.id);
          if (itemInCart) {
            this.cartQty = itemInCart.quantity;
            this.cartItem = itemInCart;
          }else {
            this.cartQty = 0;
          }
        })
        this.productService.getCommentsByProductId(product.id).subscribe((comments) => this.comments = comments);
      })
    });
    }
  setMainImage(image: string) {
    this.mainImage = image;
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
  addComment(userId : number, text : string) {
    return null;
  }
}

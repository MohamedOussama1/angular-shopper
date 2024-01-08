import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {User} from "../model/User";
import {faShippingFast, faShop, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  categories : Array<string> | undefined;
  user : User | undefined;
  userSubscription : Subscription | undefined;
  constructor(private productService : ProductService,
              private userService : UserService,
              protected router : Router) {
  }
  ngOnInit(): void {
    this.productService.getCategories().subscribe((response) => this.categories = response);
    this.userService.user$.subscribe((user) => this.user = user);
  }

  protected readonly faShop = faShop;
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
  protected readonly faShippingFast = faShippingFast;

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  protected readonly location = location;
}

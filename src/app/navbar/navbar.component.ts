import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../product.service";
import {UserService} from "../user.service";
import {User} from "../model/User";
import {faPlus, faShippingFast, faShop, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  searchText = "";
  selectedCategory = "All";
  categories : Array<string> | undefined;
  user? : User | null;
  constructor(private productService : ProductService,
      private _userService : UserService) {
      _userService.changeEmitted$.subscribe(user => {
      this.user = user;
    });
  }
  @Output() textChanged = new EventEmitter<{searchText : string, category : string}>();
  @Output() categoryChanged = new EventEmitter<string>();

  onTextChange() {
      this.textChanged.emit({searchText : this.searchText, category : this.selectedCategory});
  }
  onCategoryChange() {
    this.categoryChanged.emit(this.selectedCategory);
    this.searchText = "";
  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((response) => this.categories = response);
  }

  protected readonly faShop = faShop;
  protected readonly faPlus = faPlus;
  protected readonly faShoppingCart = faShoppingCart;
  protected readonly faUser = faUser;
  protected readonly faShippingFast = faShippingFast;
}

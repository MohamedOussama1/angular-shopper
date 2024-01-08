import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "./model/User";
import {UserService} from "./user.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {Subject, Subscription} from "rxjs";
import {CartService} from "./cart.service";
import {ProductService} from "./product.service";
import {ListProductComponent} from "./list-product/list-product.component";
import {CartComponent} from "./cart/cart.component";
import {AuthService} from "./auth.service";
import {decodeJwt, JWTPayload} from "jose";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "shopper";
  user: User | undefined;
  searchText = "";
  selectedCategory = "All";
  categories : Array<string> | undefined;
  textSubject: Subject<{searchText : string, category : string}> = new Subject<{searchText : string, category : string}>();
  categorySubject : Subject<string> = new Subject<string>();

  constructor(private userService: UserService,
              private authService : AuthService,
              private productService : ProductService) {
  }
  ngOnInit(): void {
    const jwt = localStorage.getItem("access_token");
    if (jwt && this.authService.isLoggedIn()) {
      const userId : string | undefined = decodeJwt(jwt).sub;
      if (userId) {
        this.userService.getUserById(+userId).subscribe(((user) => {
          this.user = user
          this.userService.userSubject.next(user);
        }));
        }
      }
    this.productService.getCategories().subscribe((response) => this.categories = response);
  }
  @Output() textChanged = new EventEmitter<{searchText : string, category : string}>();
  onTextChange() {
    this.textSubject.next({searchText : this.searchText, category : this.selectedCategory})
  }
  @Output() categoryChanged = new EventEmitter<string>();
  onCategoryChange() {
    // this.categoryChanged.emit(this.selectedCategory);
    this.categorySubject.next(this.selectedCategory);
    this.searchText = "";
  }

  onOutLetLoaded(component : Component) {
    if (component instanceof ListProductComponent) {
      component.events = {
        text: this.textSubject.asObservable(),
        category: this.categorySubject.asObservable()
      };
    }
  }
}

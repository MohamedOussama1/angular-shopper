import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {StarRatingModule} from "angular-star-rating";

// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

// services
import {ProductService} from "./product.service";
import {UserService} from "./user.service";
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductComponent } from './product/product.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductDetailsComponent,
    CartComponent,
    RegisterComponent,
    NavbarComponent,
    PersonalInfoComponent,
    LoginComponent,
    CartItemComponent,
    ProductComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    NgbModule,
    NgbDropdownModule,
    FormsModule,
    FontAwesomeModule,
    StarRatingModule.forRoot()
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

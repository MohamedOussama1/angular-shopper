import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";

// components
import { AppComponent } from './app.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RegisterComponent } from './register/register.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

// services
import {ProductService} from "./product.service";
import {UserService} from "./user.service";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CounterInputComponent,
    RegisterComponent,
    NavbarComponent
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
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

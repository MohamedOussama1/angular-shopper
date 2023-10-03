import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductService} from "./product.service";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgOptimizedImage,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

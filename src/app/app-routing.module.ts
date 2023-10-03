import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path: '', component:ListProductComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

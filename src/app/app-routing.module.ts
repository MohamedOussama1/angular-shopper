import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {CartComponent} from "./cart/cart.component";
import {RegisterComponent} from "./register/register.component";
import {PersonalInfoComponent} from "./personal-info/personal-info.component";
import {LoginComponent} from "./login/login.component";
import {CommentComponent} from "./comment/comment.component";
import {OrdersComponent} from "./orders/orders.component";
import {authGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'personal-info/:id', component: PersonalInfoComponent, canActivate : [authGuard]},
  {path: 'review/:id', component: CommentComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

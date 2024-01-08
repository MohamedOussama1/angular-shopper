import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../model/cart.model";
import {UserService} from "../user.service";
import {User} from "../model/User";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders : Array<Order>;
  user : User | undefined;
  constructor(private userService : UserService,
              private productService : ProductService) {
  }
  ngOnInit() {
    this.userService.user$.subscribe((_user) => {
      if (_user){
        console.log(_user);
        this.user = _user;
        this.userService.getOrdersByUser(_user.id).subscribe(_orders => {
          _orders.forEach((order: any) => {
            console.log(order);
            this.productService.getProductById(1).subscribe((value) => console.log(value))
          })
          this.orders = _orders
        });
      }
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CartItem, Order, OrderDto} from "../model/cart.model";
import {UserService} from "../user.service";
import {User} from "../model/User";
import {ProductService} from "../product.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders : Array<Order> = [];
  user : User | undefined;
  constructor(private userService : UserService,
              private productService : ProductService,
              private cartService : CartService) {
  }
  ngOnInit() {
    this.userService.user$.subscribe((_user) => {
      if (_user){
        this.user = _user;
        this.userService.getOrdersByUser(_user.id).subscribe(_orders => {
          _orders.forEach((_order: any) => {
            let order = new Order(_order.id, _order.user, _order.date);
            let orderDetails = new Array<CartItem>();
            _order.orderDetails.forEach((_orderDetail : any)=> {
              this.productService.getProductById(_orderDetail.productId).subscribe(_product => {
                orderDetails.push({id : _orderDetail.id, product : _product, quantity : _orderDetail.quantity});
              })
            });
            order.orderDetails = orderDetails;
            this.orders.push(order);
          })
        });
      }
    });
  }
  getTotal(order : Order){
    return this.cartService.getTotal(order.orderDetails);
  }

}

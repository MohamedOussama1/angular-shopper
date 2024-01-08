import {Component, Input, OnInit, signal} from '@angular/core';
import {CartItem} from "../model/cart.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  @Input() orderDetail : CartItem;
  constructor(private productService  : ProductService) {
  }
  ngOnInit() {
  }
}

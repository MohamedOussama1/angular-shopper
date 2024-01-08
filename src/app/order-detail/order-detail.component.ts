import {Component, Input} from '@angular/core';
import {CartItem} from "../model/cart.model";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  @Input() orderDetail : CartItem;
  constructor() {
  }
}

import { Component } from '@angular/core';
import {User} from "../model/User";
import {Product} from "../model/cart.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  user : User;
  text : string;
  product : Product;
}

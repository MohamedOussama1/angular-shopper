import {User} from "./User";
import {Product} from "./cart.model";

export class Comment {
  id : number
  user : User;
  product : Product;
  name : string;
  details : string;
  title : string;
  rating : number

  constructor(user: User, product: Product, name: string, details: string, title: string, rating: number) {
    this.user = user;
    this.product = product;
    this.name = name;
    this.details = details;
    this.title = title;
    this.rating = rating;
  }
}

export class CommentDto{
  id : number
  userId : number;
  productId : number;
  name : string;
  details : string;
  title : string;
  rating : number

  constructor(userId: number, productId: number, name: string, details: string, title: string, rating: number) {
    this.userId = userId;
    this.productId = productId;
    this.name = name;
    this.details = details;
    this.title = title;
    this.rating = rating;
  }
}

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

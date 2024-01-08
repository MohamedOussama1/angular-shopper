import {User} from "./User";

export interface Cart {
  items : Array<CartItem>;
}
export interface CartItem {
  id : number | undefined;
  product : Product;
  quantity : number;
}
export class CartItemDto {
  id : number | undefined;
  productId : number;
  quantity : number;


  constructor(id: number | undefined, productId: number, quantity: number) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
  }
}
export class Order {
  id : number | undefined;
  user : User | undefined;
  orderDetails : Array<CartItem>;
  date : Date;

  constructor(id: number | undefined, user: User | undefined, date: Date) {
    this.id = id;
    this.user = user;
    this.date = date;
  }
}
export interface OrderDto {
  id : number | undefined;
  userId : number | undefined;
  orderDetails : Array<CartItemDto>
  date : Date
}
export interface Product {
  id : number;
  title : string;
  price : number;
  rating: number;
  stock: number;
  brand: string;
  description : string;
  thumbnail: string;
  images : Array<string>;
  discountPercentage: number;
  category: string;
  isAvailable: boolean;
}

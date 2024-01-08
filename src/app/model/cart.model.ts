import {User} from "./User";

export interface Cart {
  items : Array<CartItem>;
}
export interface CartItem {
  id : number | undefined;
  product : Product;
  quantity : number;
}
export interface Order {
  id : number | undefined;
  user : User | undefined;
  orderDetails : Array<CartItem>
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

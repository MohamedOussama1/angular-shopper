export interface Cart {
  items : Array<CartItem>;
}
export interface CartItem {
  product : Product;
  quantity : number;
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

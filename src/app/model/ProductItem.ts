export interface ProductItem{
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



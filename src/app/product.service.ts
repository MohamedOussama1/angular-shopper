import { Injectable } from '@angular/core';
import {ProductItem} from "./model/ProductItem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/*
const product1 : ProductItem = { id: 1, name:"Iphone X", price:10000, score:100, description:"New Iphone X", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.41PIYYJF0fXJzTJ5X2DzswHaHa%26pid%3DApi&f=1&ipt=84a5f3cf1af49c6428613620298b3f067a61454ae1bcd9dd6b404dfca8db821b&ipo=images", isAvailable:true};
const product2 : ProductItem = { id: 2, name:"Iphone 11", price:9000, score:95, description:"New Iphone 11", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R8ybEmbwORXx6Z3JUR8hPgHaHa%26pid%3DApi&f=1&ipt=8f5f6b05712b494b2bc64dd3380c7ec5eeca634fb533762190cf91fe872c28c7&ipo=images", isAvailable:true};
const product3 : ProductItem = { id: 3, name:"Samsung Galaxy A51", score:99, price:3000, description:"New Galaxy A51", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5Ua3VvKrpA8A5fwGfrAbjgHaHa%26pid%3DApi&f=1&ipt=983c19d81934075f152ff45f422f0a60bbb7f86f530cb316d68cdec74f646654&ipo=images", isAvailable:true};
const product4 : ProductItem = { id: 4, name:"Ipod", price:2000, score: 91, description:"New Ipod", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nw72WjLgXwisZqkiM7b0rAHaHa%26pid%3DApi&f=1&ipt=fc782c15a877abe920127089576b3ccd6240a406051347d22e73f3c894335487&ipo=images", isAvailable:false};
const product5 : ProductItem = { id: 5, name:"Ipod", price:2000, score: 91, description:"New Ipod", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nw72WjLgXwisZqkiM7b0rAHaHa%26pid%3DApi&f=1&ipt=fc782c15a877abe920127089576b3ccd6240a406051347d22e73f3c894335487&ipo=images", isAvailable:false};
const product6 : ProductItem = { id: 6, name:"Ipod", price:2000, score: 91, description:"New Ipod", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nw72WjLgXwisZqkiM7b0rAHaHa%26pid%3DApi&f=1&ipt=fc782c15a877abe920127089576b3ccd6240a406051347d22e73f3c894335487&ipo=images", isAvailable:true};
const product7 : ProductItem = { id: 7, name:"Ipod", price:2000, score: 91, description:"New Ipod", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nw72WjLgXwisZqkiM7b0rAHaHa%26pid%3DApi&f=1&ipt=fc782c15a877abe920127089576b3ccd6240a406051347d22e73f3c894335487&ipo=images", isAvailable:false};
const product8 : ProductItem = { id: 8, name:"Ipod", price:2000, score: 91, description:"New Ipod", imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Nw72WjLgXwisZqkiM7b0rAHaHa%26pid%3DApi&f=1&ipt=fc782c15a877abe920127089576b3ccd6240a406051347d22e73f3c894335487&ipo=images", isAvailable:true};
*/
export var products : Array<ProductItem> = [
  /*
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8
  */
]
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : any;
  constructor(private http : HttpClient) {}
  getAll() : Observable<any>{
    return this.http.get("https://dummyjson.com/products")
  }
  getProductById(id:number|undefined) : Observable<any>{
    return this.http.get("https://dummyjson.com/products/" + id);
  }
}

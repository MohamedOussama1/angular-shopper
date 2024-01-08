import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./model/Comment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient) {}
  getAll() : Observable<any>{
    return this.http.get("https://dummyjson.com/products")
  }
  getProductById(id:number) : Observable<any>{
    return this.http.get("https://dummyjson.com/products/" + id);
  }
  getFilteredProducts(searchText : string) : Observable<any>{
      return this.http.get("https://dummyjson.com/products/search?q=" + searchText);
  }
  getCategories() : Observable<any>{
    return this.http.get("https://dummyjson.com/products/categories");
  }
  getProductsByCategory(category : string) : Observable<any>{
    return this.http.get("https://dummyjson.com/products/category/" + category);
  }
  getCommentsByProductId(productId : number) {
    return this.http.get("http://localhost:8080/comments/product/" + productId);
  }

  postReview(comment: Comment) {
    console.log(comment);
    return this.http.post("http://localhost:8080/comments", comment);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filteredProducts : any;
  constructor(private http : HttpClient) {}
  getAll() : Observable<any>{
    return this.http.get("https://dummyjson.com/products")
  }
  getProductById(id:number|undefined) : Observable<any>{
    return this.http.get("https://dummyjson.com/products/" + id);
  }
  getFilteredProducts(searchText : string) : Observable<any>{
      return this.http.get("https://dummyjson.com/products/search?q=" + searchText);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
    console.log("heeeeeeeeeeeere")
    return this.http.get("https://dummyjson.com/products/" + id);
  }
  getProductBySearchText(searchText : string|undefined) : Observable<any>{
    console.log("search executed")
    return this.http.get("https://dummyjson.com/products/search?q=" + searchText)
  }
}

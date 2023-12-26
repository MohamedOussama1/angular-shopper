import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/User";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  products : any;
  constructor(private http : HttpClient) {}
  getAll() : Observable<any>{
    return this.http.get("https://dummyjson.com/products")
  }
  getProductById(id:number|undefined) : Observable<any>{
    return this.http.get("https://dummyjson.com/products/" + id);
  }
  createUser(user: User){
    this.http.post("http://localhost:8080/users/", {"name": "a" , "pronoun": "a", "email":"a", "password":"a", "age":12, "username":"user"})
    console.log("heeeeeeeeeeeeere")
  }
}

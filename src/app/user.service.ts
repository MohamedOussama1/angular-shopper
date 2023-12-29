import {Injectable, numberAttribute} from '@angular/core';
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
  getUserById(id : number | undefined) : Observable<any>{
    return this.http.get("http://localhost:8080/users/" + id);
  }
  createUser(user: User) : Observable<any>{
    return this.http.post("http://localhost:8080/users/", user);
  }
  updateUser(user: User){
    this.http.put("http://localhost:8080/users/", user).subscribe(value => console.log(value));
  }
}

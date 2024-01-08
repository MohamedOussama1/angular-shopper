import {Injectable, numberAttribute} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {User} from "./model/User";
import {Cart} from "./model/cart.model";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {}
  user : User | undefined = undefined;
  userSubject = new BehaviorSubject<User | undefined>(this.user);
  user$ = this.userSubject.asObservable();
  getUserById(id : number | undefined) : Observable<any>{
    return this.http.get("http://localhost:8080/users/" + id);
  }
  getUserByEmail(email : string) : Observable<any>{
    return this.http.get("http://localhost:8080/users/by-mail/" + email);
  }
  createUser(user: User) : Observable<any>{
    return this.http.post("http://localhost:8080/users/", user);
  }
  updateUser(user: User){
    return this.http.put("http://localhost:8080/users/", user);
  }
  verifyEmail(email : string | undefined){
    return this.http.get("http://localhost:8080/users/verifyEmail/" + email);
  }
}

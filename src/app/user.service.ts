import {Injectable, numberAttribute} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User} from "./model/User";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {}
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
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
  verifyEmail(email : string | undefined){
    return this.http.get("http://localhost:8080/users/verifyEmail/" + email);
  }

  verifyLogin(email: string | undefined, password: string) {
    return this.http.get("http://localhost:8080/users/verifyLogin/" + email + "/" + password);
  }
}

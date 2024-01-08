import {Injectable} from '@angular/core';
import * as moment from "moment";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/User";
import {decodeJwt, JWTPayload, jwtVerify, KeyLike} from "jose";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {
  AUTH_KEY = "access_token"
  EXPIRATION_KEY = "expirates_at"
  user : User = new User("", "", "");
  constructor(private http: HttpClient,
              private userService : UserService) {

  }

  login(email: string, password: string){
    this.user.email = email;
    this.user.password = password;
    return this.http.post<{idToken : string, expiresIn : string}>("http://localhost:8080/users/auth", this.user);}

  setSession(authResult: {expiresIn : string, idToken : string}) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    const jwt = authResult.idToken;
    localStorage.setItem(this.AUTH_KEY, authResult.idToken);
    localStorage.setItem(this.EXPIRATION_KEY, JSON.stringify(expiresAt.valueOf()));
    const decoded : JWTPayload= decodeJwt(jwt);
    const userId : string | undefined = decoded.sub;
    if (userId) {
      console.log(userId);
      this.userService.getUserById(+userId).subscribe((user) => {
        this.userService.userSubject.next(user);
        this.userService.user = user;
      });
    }
  }

  logout() {
    if (localStorage.getItem(this.AUTH_KEY))
      sessionStorage.removeItem("cartItem")
    localStorage.removeItem(this.AUTH_KEY);
    localStorage.removeItem(this.EXPIRATION_KEY);
    this.userService.userSubject.next(undefined);
    this.userService.user = undefined;
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(this.EXPIRATION_KEY) || "";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

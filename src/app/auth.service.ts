import {Injectable} from '@angular/core';
import * as moment from "moment";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) {
    // return this.http.get<{expiresIn : string, idToken : string}>("http://localhost:8080/users/verifyLogin/" + email + "/" + password)
    //   .subscribe((response) => this.setSession(response));
    return this.http.get<string>("http://localhost:8080/users/verifyLogin/" + email + "/" + password)
      .subscribe((response) => console.log(response));
  }
  verifyLogin(email: string | undefined, password: string) {
    return this.http.get("http://localhost:8080/users/verifyLogin/" + email + "/" + password);
  }

  private setSession(authResult: {expiresIn : string, idToken : string}) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at") || "";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

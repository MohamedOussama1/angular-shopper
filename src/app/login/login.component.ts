import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../model/User";
import {AuthService} from "../auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../personal-info/personal-info.component.css']
})
export class LoginComponent {
  email : string;
  password : string;
  isValidEmail : number | any = 0;
  isInValidPassword : number | any = 0;
  user? : User | any;
  constructor(private userService : UserService,
              private authService : AuthService,
              private router : Router) {
  }
  continue(emailForm : NgForm){
    this.email = emailForm.value["email"]
    if (this.email)
      this.userService.verifyEmail(this.email).subscribe(value => this.isValidEmail = value);
  }
  login(passwordForm : NgForm){
    this.password = passwordForm.value["password"]
    if (this.password){
      this.authService.login(this.email, this.password).subscribe((authResult) => {
        if (authResult.idToken != '') {
          this.authService.setSession(authResult);
          this.router.navigate([""]);
          this.isInValidPassword = 0;
        } else
          this.isInValidPassword = 1;
      });
    }
  }
}

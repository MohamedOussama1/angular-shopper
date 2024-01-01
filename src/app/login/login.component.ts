import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../personal-info/personal-info.component.css']
})
export class LoginComponent {
  email : string | undefined;
  password : string | undefined;
  isValidEmail : number | any = 0;
  isInValidPassword : number | any = 0;
  user? : User | any;
  constructor(private userService : UserService) {
  }
  continue(emailForm : NgForm){
    this.email = emailForm.value["email"]
    if (this.email)
      this.userService.verifyEmail(this.email).subscribe(value => this.isValidEmail = value);
   console.log(this.isValidEmail);
  }
  login(passwordForm : NgForm){
    this.password = passwordForm.value["password"]
    if (this.password)
      this.userService.verifyLogin(this.email, this.password).subscribe(value => {
        if (!value)
          this.isInValidPassword = 1;
        else {
          this.user = value;
          this.userService.emitChange(this.user);
        }
      });
  }
}

import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../user.service";
import {response} from "express";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../personal-info/personal-info.component.css']
})
export class RegisterComponent {

  user : User = new User("", "", "");
  passwordConfirmation : string | undefined;
  validForm = 1;
  errMessage = "Invalid Information";

  constructor(private userService: UserService,
              private route : Router) {}
  register(form : NgForm) {
    this.user.name = form.value["name"];
    this.user.email = form.value["email"];
    this.user.password = form.value["password"];
    this.passwordConfirmation = form.value["passwordConfirmation"];
    if (this.user.password == this.passwordConfirmation)
      this.userService.createUser(this.user).subscribe(value => {
        if(value >= 0 && this.user.password.length > 7) {
          this.user.id = value;
          this.route.navigate(['/login']);
        }
        else
          this.validForm = 0;
        if (value == -2)
          this.errMessage = "Email already taken";
      })
  }
}

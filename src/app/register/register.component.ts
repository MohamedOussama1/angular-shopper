import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../user.service";
import {response} from "express";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user : User = new User("", "", "");
  passwordConfirmation : string | undefined;

  constructor(private userService: UserService) {}
  register(form : NgForm) {
    this.user.name = form.value["name"];
    this.user.email = form.value["email"];
    this.user.password = form.value["password"];
    this.passwordConfirmation = form.value["passwordConfirmation"];
    this.userService.createUser(this.user).subscribe(value => this.user.id = value)
  }
}

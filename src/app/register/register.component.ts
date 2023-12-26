import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {username : "", name: "", pronoun: "", password: "", email: "", age: 0, zip: 0, city: "", address: ""};
  constructor(private userService: UserService) {}
  register(form : NgForm) {
    this.user.username = form.value["username"];
    this.user.name = form.value["name"];
    this.user.pronoun = form.value["pronoun"]
    this.user.email = form.value["email"];
    this.user.age = form.value["age"];
    this.user.password = form.value["password"];
    this.user.address = form.value["address"];
    this.user.city = form.value["city"];
    this.user.zip = form.value["zip"];
    console.log(form.valid)
    console.log(this.user + " is registered")
    console.log(form.value);
    console.log(form.valid);
    this.userService.createUser(this.user);
  }
}

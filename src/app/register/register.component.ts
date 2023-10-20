import { Component } from '@angular/core';
import {Form, NgForm} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : any = {
  };
  register(form : NgForm) {
    console.log(form.value);
    console.log(form.valid)
    const username : string = form.value["username"];
    const password : string = form.value["password"];
  }
}

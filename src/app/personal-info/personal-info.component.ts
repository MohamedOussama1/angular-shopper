import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../model/User";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{
  user : User = new User("", "", "");
  constructor(private route : ActivatedRoute,
              private userService: UserService,
              private authService : AuthService,
              private router : Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id : number = params['id'];
      this.userService.getUserById(id).subscribe(value => this.user = value);
    })
  }
  save(form : NgForm) {
    this.user.name = form.value["name"];
    this.user.email = form.value["email"];
    this.user.age = form.value["age"];
    this.user.address = form.value["address"];
    this.user.city = form.value["city"];
    this.user.zip = form.value["zip"];
    this.userService.updateUser(this.user).subscribe((res) => console.log(res));
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

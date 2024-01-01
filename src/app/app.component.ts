import {Component} from '@angular/core';
import {User} from "./model/User";
import {UserService} from "./user.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'GzShop';
  user? : User | null;
  constructor(private userService : UserService) {
  }

}
